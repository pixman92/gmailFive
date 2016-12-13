// var http = require('http'),
//     fs = require('fs');


// fs.readFile('./views/index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(8000);
// });

// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('pubslic'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", function(req, res){
  res.send("hello World");
});
// Simple in-memory store for no

// listen for requests :)
var listener = app.listen(8000, function () {
  console.log('Your app is listening on port ' + 8000);
});
