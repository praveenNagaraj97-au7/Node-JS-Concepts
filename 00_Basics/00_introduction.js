/*
What is Node.js?

    Node.js is an open source server environment
    Node.js is free
    Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
    Node.js uses JavaScript on the server
.

Why Node.js?

    Node.js uses asynchronous programming!
    A common task for a web server can be to open a file on the server and return the content to the client.
.

To use Go to Nodejs.org and download the Stable Version.
    https://nodejs.org/dist/v12.16.2/node-v12.16.2-x64.msi



Here is how PHP or ASP handles a file request:

    Sends the task to the computer's file system.
    Waits while the file system opens and reads the file.
    Returns the content to the client.
    Ready to handle the next request.
.
// public Task<HttpResponseMessage> PostFile() 
// { 
//     HttpRequestMessage request = this.Request; 
//     if (!request.Content.IsMimeMultipartContent()) 
//     { 
//         throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType); 
//     } 

//     string root = System.Web.HttpContext.Current.Server.MapPath("~/App_Data/uploads"); 
//     var provider = new MultipartFormDataStreamProvider(root); 

//     var task = request.Content.ReadAsMultipartAsync(provider). 
//         ContinueWith<HttpResponseMessage>(o => 
//     { 

//         string file1 = provider.BodyPartFileNames.First().Value;
//         // this is the file name on the server where the file was saved 

//         return new HttpResponseMessage() 
//         { 
//             Content = new StringContent("File uploaded.") 
//         }; 
//     } 
//     ); 
//     return task; 
// } 


Here is how Node.js handles a file request:

    Sends the task to the computer's file system.
    Ready to handle the next request.
    When the file system has opened and read the file, the server returns the content to the client.
    Node.js eliminates the waiting, and simply continues with the next request.
    Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
.
*/
// Very Easy and efficient .
// Let's create a function which reads file and post the content of file to the Http Server.
// We need Two modules of node {fs - file system , http - Http response}
const fs = require("fs");
const http = require("http");
// The below function will read the file in synchronous way .
const data = fs.readFileSync("./00_introduction.js", "utf-8");
const server = http.createServer((request, response) => {
  response.end(data);
});
server.listen(40, "localhost"); // Use Terminal and run node introduction.js (save present as introduction.js)
// Boom Go to Browser and run http://localhost:40/
// Created First Node.js Script

// The same work of ASP.NET is done in very effiecient way.

/*

What Can Node.js Do?

    Node.js can generate dynamic page content
    Node.js can create, open, read, write, delete, and close files on the server
    Node.js can collect form data
    Node.js can add, delete, modify data in your database
.

What is a Node.js File?

    Node.js files contain tasks that will be executed on certain events
    A typical event is someone trying to access a port on the server
    Node.js files must be initiated on the server before having any effect
    Node.js files have extension ".js"

*/
