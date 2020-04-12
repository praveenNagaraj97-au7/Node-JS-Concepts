const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  // Write.Head is used to tell the web about type and request success code 200 is general success code it can be anything.
  // "text/html" means the response can send both text or html
  // Now we will create a simple website which will ask for name and welcome.
  res.end(`<h1>Hello World</h1>
   <button onclick = "run()">Click me </button>
   <script>
   function run(){
       let name = prompt("Enter Name ");
        document.querySelector('h1').textContent = "Hello " + name;
   }
   </script>
   `);
});

server.listen(40, "localhost"); // http://localhost:40/
