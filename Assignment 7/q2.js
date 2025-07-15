const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Callback function when any event is detected
function eventHandler(eventname) {
    console.log(`${eventname} is triggered`);
}

const eventsList = ["event1", "event2", "event3"];

eventsList.forEach(eventname => {
    myEmitter.on(eventname, () => eventHandler(eventname));
});

// Example: trigger some events
myEmitter.emit('event1');
myEmitter.emit('event3');