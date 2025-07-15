// create a node js application that binds multiple custom listeners to a single event.
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define multiple listeners for the 'greet' event
myEmitter.on('greet', () => {
  console.log('Hello from listener 1!');
});

myEmitter.on('greet', () => {
  console.log('Hello from listener 2!');
});

myEmitter.on('greet', () => {
  console.log('Hello from listener 3!');
});

myEmitter.emit('greet');
