use serde::{Serialize , Deserialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct ClassicalBit {
    #[serde(alias = "cRegIndex")]
    pub reg_index: u32,
    #[serde(alias = "cRegLabel")]
    pub reg_label: String,
    pub bit: u8
}