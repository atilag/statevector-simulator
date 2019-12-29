#[macro_use]
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

mod utils;
mod config;
mod classical_bit;
mod qubit;
mod gate;
mod quantum_register;
mod classical_register;
mod simulator;

extern crate serde_derive;
extern crate serde_json;
extern crate nalgebra as na;
extern crate nalgebra_glm as nag;
extern crate rand;
extern crate meval;
extern crate num;

use wasm_bindgen::prelude::*;
use simulator::Simulator;
use classical_register::ClassicalRegister;
use quantum_register::QuantumRegister;
use serde::Deserialize;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Deserialize)]
struct CircuitRegs {
    #[serde(alias = "qRegs")]
    q_regs: Vec<QuantumRegister>,
    #[serde(alias = "cRegs")]
    c_regs: Vec<ClassicalRegister>,
}

#[wasm_bindgen]
pub struct WasmSimulator {
    simulator: Simulator,
}

#[wasm_bindgen]
impl WasmSimulator {
    pub fn new(circuit_regs: &JsValue) -> WasmSimulator {
        //TODO: Lazy one-time initialize?
        utils::set_panic_hook();

        let regs : CircuitRegs = circuit_regs.into_serde().unwrap();

        WasmSimulator{
            simulator: Simulator::new((regs.q_regs, regs.c_regs))
        }
    }

    pub fn shots(&mut self, shots: u32) {
        self.simulator.shots(shots);
    }

    pub fn seed(&mut self, seed: u32) {
        self.simulator.seed(seed);
    }

    pub fn run(&mut self, js_gates: &JsValue) {
        let gates: Vec<gate::Gate> = js_gates.into_serde().unwrap();
        self.simulator.run(gates);
    }

    pub fn get_counts(&self) -> JsValue {
        let counts = self.simulator.counts.clone().unwrap();
        JsValue::from_serde(&counts).unwrap()
    }

    pub fn get_probabilities(&mut self) -> JsValue {
        let probabilities = match self.simulator.probabilities.clone() {
            Some(prob) => prob,
            None => {
                self.simulator.calculate_probabilities();
                self.simulator.probabilities.clone().unwrap()
            }
        };
        JsValue::from_serde(&probabilities).unwrap()
    }

    pub fn get_amplitudes(&self) -> JsValue {
        let state_vector = self.simulator.state_vector.clone();
        JsValue::from_serde(&state_vector).unwrap()
    }

    pub fn get_density_matrix(&self) -> JsValue {
        let density_matrix = self.simulator.get_density_matrix();
        JsValue::from_serde(&density_matrix).unwrap()
    }
}
