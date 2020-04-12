// Promise in JavaScript is same as we promise to someone
let a = 5;
const promise = new Promise((res, rej) => {
  if (a < 10) res(`a < ${a}  , Success.`);
  rej("Failed");
})
  .then((value) => {
    console.log(value);
    return "value is Changed";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
// Now we will do the same Example as we did in CallBackHell part
// We will read CallBackHell.js file and write that to new file with promise and again we read and console that file
const fs = require("fs");
const file = new Promise((resolve, reject) => {
  resolve(fs.readFileSync("CallBackHell1.js", "utf-8"));
})
  .then((res) => {
    //console.log(res);
    return res;
  })
  .then((res) => {
    fs.writeFileSync("NewPromise.txt", res);
  })
  .then((res) => {
    res = fs.readFileSync("NewPromise1.txt", "utf-8"); // here change the file name to NewPromise.txt error will be cleared
    return res;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.path + " is not found");
  });

// But In the above we used Sync method inside Promise
// Let see if it blocks Top-Level Code

console.log("Hello I am top level code"); // Boom we made the code Async using Promise
