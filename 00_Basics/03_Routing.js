//Routing is the Process of setting the website url

//So we will import url module to route our website

const url = require("url");

// let's Create a New Server

const server = require("http").createServer();

server.on("request", (req, res) => {
  const route = req.url;
  //console.log("You are at " + route);
});

// server.listen(40, "localhost", () => {
//   console.log("Server Started \nListening");
// });

// Run Localhost with port number
// run localhost:40 - You are at /
// run localhost:40 - You are at /main

// Now you got an idea about how its working

// Lets create different pages with the rounting
// If u find this as hard don't worry we have Express framework which will make routing easy.
// Note the above Script will never end !!

// hint : res.end() is not written in the script

// Our new Script will have 2 pages
// 1 - mainPage
// 2 - ProductPage

// This is the main page script
const main = `<h1>Hello welcome to Shopping cart </h1>
<p>You are at main Page</p>
<p>Change the top url address to /product to next page or below link .</p>
<a href='/product' >Go to Product Page</a>`;

server.on("request", (req, res) => {
  const path = req.url;
  console.log("You are at " + path);
  if (path === "/" || path === "main") {
    // if path is / or main it will take you to main page
    res.writeHead(200, { "Content-type": "text/html" }); // Head is for setting the Status code and set response header
    res.end(main); // this is the response after the page gets loaded
  } else if (path === "/product") {
    // this is for product page
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>You are at Product Page </h1>");
  } else {
    // this is in case user give wrong address.
    res.writeHead(400, { "Content-type": "text/html" });
    res.end("<h1>Page Not Found.</h1>");
  }
});

server.listen(50, "localhost", () => {
  console.log("listening");
});
