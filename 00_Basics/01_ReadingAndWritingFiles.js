const fs = require("fs");
let content = `Dogs were probably the first tame animals.
They have accompanied humans for at least 20,000 years and possibly as many as 40,000. 
Scientists generally agree that all dogs, domestic and wild, share a common wolf ancestor; 
at some point grey wolves and dogs went on their separate evolutionary ways.`;

// Lets write this to a text file called dog.txt
// _dirname means present directory
fs.writeFileSync(`dog.txt`, content); // This will write the content to the file

// Lets Access the file content now
const data = fs.readFileSync("dog.txt"); // Encoding is not mentioned in the methods
console.log(data); // this will return something as Buffers //
//<Buffer 44 6f 67 73 20 77 65 72 65 20 70 72 6f 62 61 62 6c 79 20 74 68 65
//20 66 69 72 73 74 20 74 61 6d 65 20 61 6e 69 6d 61 6c 73 2e 0a 54 68 65 79 20 68 61 ... 249 more bytes>

// Not Lets encode it to human readable language

const data1 = fs.readFileSync("dog.txt", "utf-8"); // UTF - is a variable
//width character encoding capable of encoding all 1,112,064 valid code points
//in Unicode using one to four one-byte (8-bit) code units

console.log("\n" + data1); // Boom
