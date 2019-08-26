use serde::{Serialize, Deserialize};
use std::fmt::{self};
use crate::qubit::Qubit;
use crate::classical_bit::ClassicalBit;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum GateType {
    #[serde(alias = "standard")]
    STANDARD,
    #[serde(alias = "u3")]
    U3,
    #[serde(alias = "u2")]
    U2,
    #[serde(alias = "u1")]
    U1,
    #[serde(alias = "cx")]
    CX,
    #[serde(alias = "reset")]
    RESET,
    #[serde(alias = "measure")]
    MEASURE,
    #[serde(alias = "id")]
    ID,
    #[serde(alias = "none")]
    NONE,
}

impl Default for GateType {
    fn default() -> Self {
        GateType::NONE
    }
}

impl fmt::Display for GateType {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

#[derive(Hash, Eq, PartialEq, Debug, Serialize, Deserialize, Clone, Default)]
pub struct QubitParam {
    param: String,
    qubit: Qubit,
}

#[derive(PartialEq, Debug, Serialize, Deserialize, Clone, Default)]
pub struct GateParams {
    pub label: String,
    pub value: f64,
}

#[derive(Hash, Eq, PartialEq, Debug, Serialize, Deserialize, Clone, Default)]
pub struct Conditional {
    #[serde(alias = "cRegIndex")]
    reg_index: u32,

    #[serde(alias = "cRegLabel")]
    reg_label: String,

    pub value: i8
}


#[derive(Serialize, Deserialize, Clone)]
pub struct Gate {
    #[serde(default)]
    pub r#type: GateType,

    pub label: String,

    #[serde(default)]
    pub qasm: String,

    #[serde(default)]
    pub qubits: Vec<Qubit>,

    #[serde(alias = "cbits", default)]
    pub c_bits: Vec<ClassicalBit>,

    #[serde(alias = "controlQubits", default)]
    pub control_qubits: Option<Vec<Qubit>>,

    #[serde(default)]
    pub params: Option<Vec<GateParams>>,

    #[serde(alias = "qubitParams", default)]
    pub qubit_params: Option<Vec<QubitParam>>,

    #[serde(default)]
    pub conditional: Option<Conditional>,
}

impl fmt::Display for Gate {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let values = match &self.params {
            Some(p) => p.iter().map(|gp|gp.value).collect(),
            None => vec![]
        };

        write!(f, "Gate: {:?}\nparams.value: {:?}", self.label, values)
    }
}
