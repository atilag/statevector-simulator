use serde::Deserialize;

#[derive(Deserialize)]
pub struct ClassicalRegister{
    pub label: String,
    pub size: u32,
}