//use const or let
const express   = require("express"); //include library to access as object
const app       = express(); //initialize code
const http      = require("http"); //http is built-in
const server    = http.createServer(app); //pass express app into created server to initialize

const PORT      = 8080; //default unsecured is 80 if not defined; some ports are reserved
server.listen(PORT); //port to access server

app.use(express.static(__dirname + "/public")); //describe where files are located

console.log("Listening on port: " + PORT);

//root route
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/index.html"); //serve index.html
});