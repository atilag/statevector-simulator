
use crate::quantum_register::QuantumRegister;
use crate::classical_register::ClassicalRegister;
use crate::gate::{Gate, GateParams};
use crate::config::Config;
use crate::qubit::Qubit;
use crate::classical_bit::ClassicalBit;

use num::complex::Complex;
use rand::SeedableRng;
use rand::rngs::StdRng;
use rand::Rng;
//use meval;
use std::collections::HashMap;
use wasm_bindgen::prelude::*;

trait ToComplex {
    fn to_complex(&self) -> Complex<f64>;
}

impl ToComplex for f64 {
	fn to_complex(&self) -> Complex<f64> {
		Complex{
		re: *self,
		im: 0.
		}
	}
}

impl ToComplex for (f64,f64) {
    fn to_complex(&self) -> Complex<f64> {
        Complex {
            re: self.0,
            im: self.1,
        }
    }
}

trait Round {
    fn round(self) -> Complex<f64>;
}

impl Round for Complex<f64> {
    fn round(self) -> Complex<f64> {
        Complex::<f64>::new(
            self.re.round(),
            self.im.round()
        )
    }
}

pub struct Simulator {
    q_regs: Vec<QuantumRegister>,
    c_regs: Vec<ClassicalRegister>,
    num_qubits: u32,
    num_cbits: u32,
    config: Config,
    classical_state: u32,
    pub state_vector: Vec<Complex<f64>>,
    rand: StdRng,
    pub probabilities: Option<HashMap<String, f64>>,
    pub counts: Option<HashMap<String, u32>>
}

impl Simulator {
    /**
     * Creates a new instance of the Simulator.
     *
     * # Arguments
     * * `q_regs` - A Vector of QuantumRegister objects that represent every qbit
     * * `c_regs` - A Vector of ClassiclRegister objects that represent every classical register
     *
     */
    pub fn new((q_regs, c_regs): (Vec<QuantumRegister>, Vec<ClassicalRegister>)) -> Simulator {

        let (num_qubits, num_cbits) = calculate_num_registers(&q_regs, &c_regs);

        Simulator {
            q_regs,
            c_regs,
            num_qubits,
            num_cbits,
            config: Config::default(),
            classical_state: 0,
            state_vector: vec![(0.,0.).to_complex(); 2usize.pow(num_qubits)],
            rand: SeedableRng::seed_from_u64(0u64),
            probabilities: None,
            counts: None
        }
    }

    /**
     * Sets the number of times a circuit will run.
     *
     * # Arguments
     * * `shots` - How many times the circuit will be executed
     *
     * # Returns
     * * An instance of the simulator object with the new value in it's state
     *   Builder pattern
     */
    pub fn shots(&mut self, shots: u32) -> &mut Simulator {
        self.config.shots = shots;
        self
    }

    /**
     * Sets the initial seed for the random number generator engine
     *
     * # Arguments
     * * `seed` - The inital seed
     *
     * # Returns
     * * An instance of the simulator object with the new value in it's state
     *   Builder pattern
     */
    pub fn seed(&mut self, seed: u32) -> &mut Simulator {
        self.config.seed = seed;
        self.rand = SeedableRng::seed_from_u64(u64::from(self.config.seed));
        self
    }

    /**
     * Runs the circuit.
     *
     * # Arguments
     * * `gates` - A Vector of gates conforming the circuit to be run
     *
     * # Returns
     * * A HashMap with the number of times a possible bitstring has been returned
     *   as a consequence of measuring the quantum state in the end of the circuit
     *   execution
     * # Output example:
     *   {"10010": 54, "11110": 46} -> The circuit has run 100 times (56+46) and
     *                                 54 times has returned the bitstring "10010"
     *                                 and 46 has returned "11110" bistring.
     *
     */
    pub fn run(&mut self, gates: Vec<Gate>){
        let mut counts = HashMap::new();
        self.initialize();
        if self.config.shots > 0 {
            for _ in 0..self.config.shots {
                self.initialize();
                self.apply_gates(&gates, true);
                let final_state = self.get_state_string(self.classical_state);
                *(counts.entry(final_state).or_insert(0u32)) += 1;
            }
            self.counts = Some(counts);
        } else {
            self.initialize();
            self.apply_gates(&gates, false);
            self.calculate_probabilities();
        }
    }


    fn get_state_string(&self, classical_state: u32) -> String {
        state_to_string(classical_state, self.num_qubits)
    }

    /**
     * Returns the number of total amplitudes for the circuit being run.
     * # Remarks
     * The number of total amplitudes is just:  2 ^ number_of_qubits.
     */
    fn amplitudes(&self) -> u64 {
        1 << self.num_qubits
    }

    fn initialize(&mut self){
        self.classical_state = 0;
        self.state_vector[0] = (1.,0.).to_complex();
    }


    fn apply_single_qubit_gate(&mut self, matrix: na::Matrix2<Complex<f64>>, qubit: u32){
        let bit = (1 << qubit) as usize;
        let step = 1 << (qubit + 1);
        for i in (0..self.amplitudes()).step_by(step) {
            for j in 0..bit {
                let k = i as usize | j;
                let default_value = (0.,0.).to_complex();
                let value1 = *(self.state_vector.get(k).unwrap_or(&default_value));
                let value2 = *(self.state_vector.get(k | bit).unwrap_or(&default_value));
                self.state_vector[k] = (matrix[(0,0)] * value1) + (matrix[(0,1)] * value2);
                self.state_vector[k | bit] = (matrix[(1,0)] * value1) + (matrix[(1,1)] * value2);
            }
        }
    }

    fn apply_cx(&mut self, control: u32, target: u32){
        let limit = 1 << (self.num_qubits - 2);
        for i in 0..limit {
            let index0 = apply_bits(1, control, 0, target, i) as usize;
            let index1 = apply_bits(1, control, 1, target, i) as usize;
            let default_value = (0.,0.).to_complex();
            let value_index0 = *self.state_vector.get(index0).unwrap_or(&default_value);
            let value_index1 = *self.state_vector.get(index1).unwrap_or(&default_value);
            self.state_vector[index0] = value_index1;
            self.state_vector[index1] = value_index0;
        }
    }

    fn apply_decision(&mut self, qubit: u32) -> (u32, f64) {
        let mut probability_zero : f64 = 0.;
        let rand_number : f64 = self.rand.gen();
        let default_value = (0.,0.).to_complex();
        for i in 0..self.amplitudes() as usize {
            if i & (1 << qubit) == 0 {
                let state_vector_value = self.state_vector.get(i).unwrap_or(&default_value);
                probability_zero += ((state_vector_value).powu(2)).norm();
            }
        }
        let mut result = 0u32;
        let norm = if rand_number > probability_zero {
            result = 1;
            (1. - probability_zero).sqrt()
        }else{
            probability_zero.sqrt()
        };

        (result, norm)
    }

    fn apply_measure(&mut self, qubit: u32, c_bit: u32) {
        let (result, norm) = self.apply_decision(qubit);
        let default_value = (0.,0.).to_complex();
        for i in 0..self.amplitudes() as usize {
            if (i >> qubit) & 1 == result as usize {
                let state_vector_value = self.state_vector.get(i).unwrap_or(&default_value);
                self.state_vector[i] = state_vector_value / norm;
            } else {
                self.state_vector[i] = (0.,0.).to_complex();
            }
        }
        let bit = 1 << c_bit;
        let unsigned_result = result as u32;
        self.classical_state = (self.classical_state & !bit) | (unsigned_result << c_bit);
    }


    fn apply_reset(&mut self, qubit: u32){
        let (result, norm) = self.apply_decision(qubit);
        let mut state_vector_clone = self.state_vector.clone();
        self.state_vector = vec![];

        state_vector_clone = state_vector_clone.iter().enumerate()
            .take(self.amplitudes() as usize).map(|(i, value)|{
            if (i >> qubit) & 1 == result as usize {
                value / norm
            }else{
                (0.,0.).to_complex()
            }
        }).collect();

        if result == 1 {
            for (i, state_vector_value) in state_vector_clone.iter().enumerate().take(self.amplitudes() as usize) {
                let index = !(1 << qubit) & i;
                self.state_vector[index] = state_vector_value + state_vector_clone[i];
            }
        } else {
            self.state_vector = state_vector_clone.clone();
        }
    }

    fn apply_gates(&mut self, gates: &[Gate], measured_enabled: bool){
        for gate in gates.iter() {
            if gate.conditional.is_some() &&
               self.classical_state == gate.conditional.as_ref().unwrap().value as u32 {
                   continue;
            }

            let affected_qubits : Vec<u32> = gate.qubits.iter().map(|qubit|{
                get_qubit_index(self.q_regs.as_ref(), &qubit)
            }).collect();

             let affected_bits : Vec<u32> = gate.c_bits.iter().map(|c_bit|{
                get_classical_bit_index(self.c_regs.as_ref(), &c_bit)
            }).collect();


            match &gate.label[..] {
                "u1" | "u2" | "u3" | "U" => {
                    self.apply_single_qubit_gate(get_unitary_matrix(gate), affected_qubits[0]);
                },
                "cx" | "CX" => {
                    self.apply_cx(affected_qubits[0], affected_qubits[1])
                },
                "measure" => {
                    if measured_enabled {
                        self.apply_measure(affected_qubits[0], affected_bits[0]);
                    }
                },
                "reset" => {
                    self.apply_reset(affected_qubits[0]);
                }
                _ => {}
            };
        }
    }

    /**
     * Calculates the probability of every amplitude in the state vector
     *
     * # Remarks
     * The probabilities are represented in the range of 0 to 100.
     * Basically, a probability is the absolute (no negative values) of an amplitude to the square:
     * p = |amp|^2
     */
    fn calculate_probabilities(&mut self) {
        self.probabilities = Some(self.state_vector.iter()
            .enumerate()
            .filter_map(|(i, state_value)| {
            let state_rounded = state_value.round();
            if state_rounded.re > 0. {
                let binary_state = self.get_state_string(i as u32);
                let probability = (state_rounded.norm().powi(2)) * 100.;
                return Some((binary_state, probability));
            }
            None
        }).collect());
    }

    /**
     * Return the density matrix representation of the state vector
     */
    pub fn get_density_matrix(&self) -> Vec<Vec<Complex<f64>>> {
        self.state_vector.iter().take(self.amplitudes() as usize).map(|state_row|{
            self.state_vector.iter().take(self.amplitudes() as usize).map(|column|{
                (column.re, column.im * -1.0).to_complex() * state_row
            }).collect()
        }).collect()
    }
}


fn get_qubit_index(regs: &[QuantumRegister], qubit: &Qubit) -> u32 {
    let reg_index = qubit.reg_index;
    let qubit_reg_index = qubit.bit;
    let mut offset = 0;
    for reg in regs.iter().take(reg_index as usize){
        offset += reg.size;
    }
    offset + u32::from(qubit_reg_index)
}

fn get_classical_bit_index(regs: &[ClassicalRegister], c_bit: &ClassicalBit) -> u32 {
    let reg_index = c_bit.reg_index;
    let c_reg_index = c_bit.bit;
    let mut offset = 0;
    for reg in regs.iter().take(reg_index as usize){
        offset += reg.size;
    }
    offset + u32::from(c_reg_index)
}

fn get_gate_params(label: &str, params: &Option<Vec<GateParams>>) -> (f64, f64, f64){
    let default_vec = vec![];
    let end_params: HashMap<String, f64> = params.as_ref().unwrap_or(&default_vec).iter().map(|param|{
        (param.label.clone(), param.value)
    }).collect();

    let (theta, phi, lambda) = match label {
        "u2"=> {
            (std::f64::consts::PI / 2.,
            if end_params.contains_key("phi") {
                end_params["phi"]
            }else{
                0.
            },
            if end_params.contains_key("lambda") {
                end_params["lambda"]
            }else{
                0.
            })
        },
        "u1" => {
            (0., 0., end_params["lambda"])
        },
        "id" => {
            (0., 0., 0.)
        },
        _ => {
            (if end_params.contains_key("theta") {
                end_params["theta"]
            }else{
                0.
            },
            if end_params.contains_key("phi") {
                end_params["phi"]
            }else{
                0.
            },
            if end_params.contains_key("lambda") {
                end_params["lambda"]
            }else{
                0.
            })
        }
    };

    (theta, phi, lambda)
}

/**
 * Returns the unitary matrix representation of the rotation gate
 */
fn get_unitary_matrix(gate: &Gate) -> na::Matrix2<Complex<f64>> {
    let (theta, phi, lambda) = get_gate_params(&gate.label, &gate.params);
    na::Matrix2::new(
        (theta / 2.).cos().to_complex(),
        -1. * ((0.,1.).to_complex() * lambda).exp() * (theta/2.).sin(),
        ((0.,1.).to_complex() * phi).exp() * (theta/2.).sin(),
        (((0.,1.).to_complex() * phi) + ((0.,1.).to_complex() * lambda)).exp() * (theta/2.).cos()
    )
}

fn apply_bits(bit1: u32, index1: u32, bit2: u32, index2: u32, bit_string: u32) -> u32 {
    if index1 == index2 { return 0 };
    let mut result;

    if index1 > index2 {
        result = apply_bit(bit1, index1 - 1, bit_string);
        result = apply_bit(bit2, index2, result);
    } else {
        result = apply_bit(bit2, index2 - 1, bit_string);
        result = apply_bit(bit1, index1, result);
    }
    result
}

fn apply_bit(bit: u32, index: u32, bit_string: u32) -> u32 {
    let mut result = bit_string;
    let lower_bit_mask = (1 << index) -1;
    let low_bits = bit_string & lower_bit_mask;
    result >>= index;
    result <<= 1;
    result |= bit;
    result <<= index;
    result |= low_bits;
    result
}

/**
 * Returns the string representation of the classical state (the bitstring)
 */
fn state_to_string(classical_state: u32, num_qubits: u32) -> String {
    format!("{:0width$b}", classical_state, width=num_qubits as usize)
}

fn calculate_num_registers(q_regs: &[QuantumRegister], c_regs: &[ClassicalRegister])
-> (u32, u32) {
    let mut num_qubits = 0;
    for reg in q_regs.iter() {
        num_qubits += reg.size;
    }

    let mut num_cbits = 0;
    for reg in c_regs.iter() {
        num_cbits += reg.size;
    }

    (num_qubits, num_cbits)
}
