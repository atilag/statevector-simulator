const VectorSimulator = require('./ibm-q-simulator/src/index.js').default;


const simulator = new VectorSimulator({
  cRegs: [{
    "label": "ans",
    "size": 5
  }],
  qRegs: [{
    "label": "cin",
    "size": 1
  }, {
    "label": "a",
    "size": 4
  }, {
    "label": "b",
    "size": 4
  }, {
    "label": "cout",
    "size": 1
  }]
});



const result = simulator.run([
  {
    "label": "u3",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "theta",
        "value": 3.141592653589793
      },
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "u3",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "theta",
        "value": 3.141592653589793
      },
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "u3",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "theta",
        "value": 3.141592653589793
      },
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "u3",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "theta",
        "value": 3.141592653589793
      },
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "u3",
    "qubits": [
      {
        "bit": 0,
        "qRegIndex": 1,
        "qRegLabel": "a"
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "theta",
        "value": 3.141592653589793
      },
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "type": "cx",
    "label": "cx",
    "qasm": "cxa[3],cout[0]",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      },
      {
        "qRegIndex": 3,
        "qRegLabel": "cout",
        "bit": 0
      }
    ],
    "controlQubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "qubitParams": [
      {
        "param": "c",
        "qubit": {
          "qRegIndex": 1,
          "qRegLabel": "a",
          "bit": 3
        }
      },
      {
        "param": "t",
        "qubit": {
          "qRegIndex": 3,
          "qRegLabel": "cout",
          "bit": 0
        }
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 3
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 2
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 1
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u2",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "phi",
        "value": 0
      },
      {
        "label": "lambda",
        "value": 3.141592653589793
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": 0.7853981633974483
      }
    ]
  },
  {
    "label": "u1",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": [
      {
        "label": "lambda",
        "value": -0.7853981633974483
      }
    ]
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 1,
        "qRegLabel": "a",
        "bit": 0
      },
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "label": "cx",
    "qubits": [
      {
        "qRegIndex": 0,
        "qRegLabel": "cin",
        "bit": 0
      },
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [],
    "params": []
  },
  {
    "type": "measure",
    "qasm": "measureb[0]->ans[0]",
    "label": "measure",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 0
      }
    ],
    "cbits": [
      {
        "cRegIndex": 0,
        "cRegLabel": "ans",
        "bit": 0
      }
    ]
  },
  {
    "type": "measure",
    "qasm": "measureb[1]->ans[1]",
    "label": "measure",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 1
      }
    ],
    "cbits": [
      {
        "cRegIndex": 0,
        "cRegLabel": "ans",
        "bit": 1
      }
    ]
  },
  {
    "type": "measure",
    "qasm": "measureb[2]->ans[2]",
    "label": "measure",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 2
      }
    ],
    "cbits": [
      {
        "cRegIndex": 0,
        "cRegLabel": "ans",
        "bit": 2
      }
    ]
  },
  {
    "type": "measure",
    "qasm": "measureb[3]->ans[3]",
    "label": "measure",
    "qubits": [
      {
        "qRegIndex": 2,
        "qRegLabel": "b",
        "bit": 3
      }
    ],
    "cbits": [
      {
        "cRegIndex": 0,
        "cRegLabel": "ans",
        "bit": 3
      }
    ]
  },
  {
    "type": "measure",
    "qasm": "measurecout[0]->ans[4]",
    "label": "measure",
    "qubits": [
      {
        "qRegIndex": 3,
        "qRegLabel": "cout",
        "bit": 0
      }
    ],
    "cbits": [
      {
        "cRegIndex": 0,
        "cRegLabel": "ans",
        "bit": 4
      }
    ]
  }
]);

var suite = new Benchmark.Suite;
suite 

console.log(result);