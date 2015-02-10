// Node.js and Express with Joe Eames

// npm--NODE PACKAGE MANAGER

// Browser doesn’t care where the contents of the file are. your computer, online, etc.

// File:// local
// Http:// online

// When building nose.js, we use “npm” Node Package Manager a lot.
// npm install http-server

// TO INSTALL EXPRESS and TURN SERVER ON. nodemon server.js
// touch package.json to create
// npm init - will walk you through setting up a package.json file
// go to package.json file and add curly braces
// sudo npm install --save express
// enter through stuff

// ACTIVATING EXPRESS in node.JS
// var express = require("express");
// var app = express();
// var port = (9001);
// app.listen(9001); 
// ———————————————————————————————-
// Body Parser = 
// npm install body-parser
// bodyParser = require("body-parser");
// app.use(bodyParser.json());
// What is middleware?
// .use will allow a function for all methods (.get, .put, .post)
// app.use(bodyParser.urlencoded({extended: true})); <—- -any method, any url, run the function of .use
// Another example of .use
// app.use(function(req. res, next){
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept”);
// next{};
// })
// app.get endpoint
// app.get(‘/‘, function(req. res){
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.send(‘test’)
// }) and then check POSTMAN if working on localhost
// Routes in Angular and routes in Node.js
// Angular has different views/routes. One view is for the user seeing the html/css and etc.
// Server: XHR request to get data. Uses the data for the site.
