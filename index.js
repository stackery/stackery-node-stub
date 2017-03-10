module.exports.output = function(message, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  return new Promise((resolve) => {
    // Simulate IO, resolve after a tick of the event loop
    process.nextTick(() => {
      if (callback)
        callback()

      resolve()
    })
  })
}
