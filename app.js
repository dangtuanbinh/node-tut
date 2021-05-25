const EventEmitter = require("events");

const customEmitter = new EventEmitter()

// "on" will listen for an event, "emit" wil emit an event
customEmitter.on('response', () => {
  console.log('data received');
})

customEmitter.emit('response')