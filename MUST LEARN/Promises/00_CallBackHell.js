// Since Node JS work on the principles of call backs
// Sometime we may get into callback hell where 10's of callbacks occur in nested way.

// Let's See what call back is

const fs = require("fs"); // We will see callback with file systems

fs.writeFile("call1.txt", "call2.txt", (err) => {
  if (err) console.log(err);
  fs.readFile("call1.txt", (err, data) => {
    if (err) console.log(err);
    else
      fs.writeFile(data, "call2.txt is created", (err) => {
        if (err) console.log(err);
        fs.appendFile("call2.txt", "Appended", (err) => {
          if (err) console.log(err);
          fs.writeFile("call3.txt", "call4.txt", (err) => {
            if (err) console.log(err);
            fs.readFile("call3.txt", (err, data) => {
              if (err) console.log(err);
              else
                fs.writeFile(
                  data,
                  "Call4 text I am and written from call3.txt",
                  (err) => {
                    if (err) console.log(err);
                  }
                );
            });
          });
        });
      });
  });
});

// So we arrived at some triangle shape which is meant to be callback-hell
