// Stream is the process of creating live data that is being feed to the server
// Let's create a server and stream file text to the web
const fs = require("fs");
const server = require("http").createServer();
//  type -1 but this is not an efficient way ,because it will use variable to store and send to server
server.on("request", (req, res) => {
  //Type - 1
  //   fs.readFile("CallofWild.pdf", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //Type - 2

  const readable = fs.createReadStream("CallofWild.pdf");
  readable.pipe(res);
});

server.listen(40, "localhost");
