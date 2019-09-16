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
pub fn simulate(js_gates: &JsValue, circuit_regs: &JsValue, shots: u32, seed: u32) {

    utils::set_panic_hook();

    let gates: Vec<gate::Gate> = js_gates.into_serde().unwrap();

    // for gate in gates.iter(){
    //     log!("{}", gate.to_string());
    // }

    let regs : CircuitRegs = circuit_regs.into_serde().unwrap();

    // for reg in regs.q_regs.iter() {
    //     log!("qreg.label: {}  qreg.value: {}", reg.label, reg.size);
    // }

    // for reg in regs.c_regs.iter() {
    //     log!("creg.label: {}  creg.value: {}", reg.label, reg.size);
    // }

    let mut sim = Simulator::new((regs.q_regs, regs.c_regs));
    sim.shots(shots).seed(seed).run(gates);

    // for (i, state) in sim.state_vector.iter().enumerate() {
    //    log!("{}: {}", i, state);
    // }

    // for (i, probability) in sim.probabilities.unwrap().iter().enumerate() {
    //     log!("{} probilities: {:?}", i, probability);
    // }
}
