<div align="center">

  <h1><code>WASM Quantum State Vector Simulator</code></h1>

  <strong>This is an ideal (no noise) quantum state vector simulator written in Rust
  and compiled to WebAssembly so it can be embeded in a webpage (or any other WASM host).</strong>
  <strong>The `www` directory has been used for testing, benchmarking and comparison reasons.</strong>

  <p>
    <a href="https://travis-ci.org/atilag/statevector-simulator"><img src="https://img.shields.io/travis/atilag/statevector-simulator.svg?style=flat-square" alt="Build Status" /></a>
  </p>

  <h3>
    <a href="#usage">Usage</a>
    <span> | </span>
    <a href="#install">Install</a>
    <span> | </span>
    <a href="#build">Build</a>
    <span> | </span>
    <a href="https://qiskit.slack.com/messages/CNHGWED8S">Chat</a>
  </h3>


  <sub>Built with 🦀 by <a href="https://qiskit.org/">The Qiskit community</a></sub>
</div>

### Usage
```
-- index.js:
import * as wasm from "statevector-simulator";

let circuit = [
  {
    "type": "standard",
    "label": "u3",
    "qasm": "u3(pi/2,pi/2,pi/2)q[0]",
    "qubits": [{ "qRegIndex": 0, "qRegLabel": "q", "bit": 0 }],
    "cbits": [],
    "params": [
      { "label": "theta", "value": "pi/2" },
      { "label": "phi", "value": "pi/2" },
      { "label": "lambda", "value": "pi/2" }
    ]
  },
  {
    "type": "cx",
    "label": "cx",
    "qasm": "cxq[0],q[1]",
    "qubits": [
      { "qRegIndex": 0, "qRegLabel": "q", "bit": 0 },
      { "qRegIndex": 0, "qRegLabel": "q", "bit": 1 }
    ],
    "controlQubits": [{ "qRegIndex": 0, "qRegLabel": "q", "bit": 0 }],
    "cbits": [],
    "qubitParams": [
      { "param": "c", "qubit": { "qRegIndex": 0, "qRegLabel": "q", "bit": 0 } },
      { "param": "t", "qubit": { "qRegIndex": 0, "qRegLabel": "q", "bit": 1 } }
    ]
  },
  {
    "type": "measure",
    "qasm": "measureq[0]->c[0]",
    "label": "measure",
    "qubits": [{ "qRegIndex": 0, "qRegLabel": "q", "bit": 0 }],
    "cbits": [{ "cRegIndex": 0, "cRegLabel": "c", "bit": 0 }]
  }
  ,
  {
    "type": "measure",
    "qasm": "measureq[1]->c[1]",
    "label": "measure",
    "qubits": [{ "qRegIndex": 0, "qRegLabel": "q", "bit": 1 }],
    "cbits": [{ "cRegIndex": 0, "cRegLabel": "c", "bit": 1 }]
  }
];

let circuit_regs = {
  cRegs: [{ "name": "c", "size": "2" }],
  qRegs: [{ "name": "q", "size": "2" }]
};

wasm.simulate(circuit, circuit_regs, 1024 /* shots */, 69 /* seed */);

```

### Install
```
npm install statevector-simulator
```

### 🛠 Build with `wasm-pack build`

```
wasm-pack build
```
