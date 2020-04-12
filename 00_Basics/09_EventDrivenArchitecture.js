const event = require("events"); // event module from node
const eventEmmitter = new event();
// Event is created , listener is added , callback is loaded
eventEmmitter.on("print", () => console.log("Event is emmited"));
// until event is called to emit this call back will not be called

eventEmmitter.emit("print"); // listener

eventEmmitter.on("print", () => console.log("Event is emmited for 2nd time")); // this will not be exected as it is out of listener
eventEmmitter.emit("print"); // but this will call the first event also as both event have same name

// lets  change the event name and run

eventEmmitter.on("run", () => console.log(`I am at place 1 and I ran `));
eventEmmitter.on("run", () => console.log(`I am at place 2 and I ran`));
eventEmmitter.on("run", (name) => console.log(`Hello ${name} `));

eventEmmitter.emit("run", "Praveen");
