import * as wasm from "statevector-simulator";
import _ from 'lodash';

// This is needed in order to use Webpack + Benchmar.js
// https://github.com/bestiejs/benchmark.js/issues/128#issuecomment-271615298


let test_circuit = [
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
      ],
      "conditional": {"cRegIndex":0,"cRegLabel":"c","value":0}
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

let circuit = [
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
]

const circuit_regs = {
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
};

const VectorSimulator = require('./ibm-q-simulator/src/index.js').default;
const js_simulator = new VectorSimulator(circuit_regs);
var bench = require('nanobench')

bench('JS Statevector 70 times', function (b) {

  b.start()

  for (var i = 0; i < 1; i++) {
    js_simulator.run(circuit, 0, 69);
  }

  b.end()
})

bench('WASM Statevector 70 times', function (b) {

  b.start()

  for (var i = 0; i < 1; i++) {
    wasm.simulate(circuit, circuit_regs, 0, 69);
  }

  b.end()
})


