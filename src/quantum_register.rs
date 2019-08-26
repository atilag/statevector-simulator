use serde::Deserialize;

#[derive(Deserialize)]
pub struct QuantumRegister {
    pub label: String,
    pub size: u32,
}