// Let's build a new Promise which will Create a fileReaderPro and fileWriterPro
const fs = require("fs");
const fileReaderPro = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) reject("File name Not Found");
      resolve(data);
    });
  });
};

fileReaderPro("01_Promises.js").then((result) => {
  console.log(result);
}); // Boom Our Own Promise is created

// Try for FileWritePro
