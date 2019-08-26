use serde::{Serialize, Deserialize};


#[derive(Hash, Eq, PartialEq, Debug, Serialize, Deserialize, Clone, Default)]
pub struct Qubit {
    #[serde(alias = "qRegIndex")]
    pub reg_index: u32,
    #[serde(alias = "qRegLabel")]
    pub reg_label: String,
    pub bit: u8
}