# Quantum Statevector Simulator

This is a very simple implementation of an ideal statevector quantum simulator.
It's intended to be used in web app as a WebAssmebly module, written in Rust, so building a native version should be straightforward (and is planned). 

The `www` directory has been used for testing, benchmarking and comparising reasons, there's a missing piece though (a JavaScript implementation) that will be added soon, so in the meantime it's probably not very useful for others than me.    

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

