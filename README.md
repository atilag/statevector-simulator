<div align="center">

  <h1><code>WASM Quantum State Vector Simulator</code></h1>

  <strong>This is an ideal (no noise) quantum state vector simulator written in Rust
  and compiled to WebAssembly so it can be embeded in a webpage (or any other WASM host).</strong>
  <strong>The `www` directory has been used for testing, benchmarking and comparising reasons, there's a missing piece though (a JavaScript implementation) that will be added soon, so in the meantime it's probably not very useful for others than me.</strong>

  <p>
    <a href="https://travis-ci.org/atilag/statevector-simulator"><img src="https://img.shields.io/travis/atilag/statevector-simulator.svg?style=flat-square" alt="Build Status" /></a>
  </p>

  <h3>
    <a href="#usage">Usage</a>
  </h3>

  <sub>Built with 🦀 by <a href="https://qiskit.org/">The Qiskit community</a></sub>
</div>


### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

### 🎁 Publish to NPM with `wasm-pack publish`

```
wasm-pack publish
```
