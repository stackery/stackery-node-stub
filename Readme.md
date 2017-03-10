# Stackery Module Stub

This module is a stub for the real [Stackery](https://www.stackery.io) module that is used for outputting messages from a [Function](https://docs.stackery.io/nodes/Function) node in a deployment. It is useful for when you want to run your Function code outside of a Stackery deployment.

To use the module, add it as a development dependency of your Function:
```
npm install --save-dev stackery
```

## Stubs
### output
The `stackery.output()` function matches the [Ouput function](https://docs.stackery.io/nodes/Function#outputting-messages) signature. The stub ignores the message and options and resolves after the next tick of the Node.js event loop.
