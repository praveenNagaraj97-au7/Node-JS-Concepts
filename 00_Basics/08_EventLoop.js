/*
Since NodeJS is a Single - Threaded Framework.
It will work like 
- Initialize Program
- Execute "Top-Level" Code
- Get Required Modules
- Register Event Callbacks
- Start Event Loop 
*/

const fs = require("fs"); // Module (at 3)
setTimeout(() => console.log("1st Timer is triggered"), 12000); // Event Callbacks
// this will take 5 sec which will block the further below code(but here it will not block).
setImmediate(() => console.log("1st Immediate is Triggered")); // Event Callbacks
let data = "file was created and read.";
fs.writeFile(`event.txt`, data, () => console.log("File is written"));

fs.readFile("event.txt", "utf-8", (err, data) =>
  setTimeout(() => console.log(`${data}`), 10000)
); // It will take 3 sec to read file

console.log("Welcome to the website"); //Top Level Code

/*
Program was Initialized
Top - level Got Executed First ('Welcome to the website')
fs module was imported
Call back were registered based on timeouts which gets foloowed by :
    - Immediate ('1st Immediate is Triggered')--(which took 0 sec to load , but was only executed after top level - even if it takes 0 sec)
    - readFile took 10 sec to read and it showed its output
    - setTimeout Was executed after 12 sec which is 2 sec after readFile
    - The event get ended after total time of approx-12sec. // so the event was not looped 
    // becaue the event gets looped if there is any callbacks left 
*/
// Lets create a event loop which will loop forever getting time

setInterval(() => console.log(Date().split(" ")[4]), 1000); // this will not stop looping

// the infinite loop will start as soon as it loads top level - code and immediate callbacks ,
// then it will start running and the remaining will be loaded in the background.
// which will get loaded to the web once they get loaded

/*
Event Loop Structure

Info: Start process (7:34:49 pm)
Welcome to the website - Top-Level Code
// here the fs was imported and event call backs were registered.
// all the below will start in the background.
1st Immediate is Triggered - Immediate callback is executed
File is written // file is written as it doesnt take ant time
19:34:50 - the event loop started
19:34:51
19:34:52
19:34:53
19:34:54
19:34:55
19:34:56
19:34:57
19:34:58
file is read. (10sec the readFile callback was executed)
19:34:59
19:35:00
1st Timer is trigered (afther 2sec that is 12sec setTimeout was executed)
19:35:01 // the infinite loop get looped as the time gets changed
*/
