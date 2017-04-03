//Require npm modules
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require('express-session');
var favicon = require('serve-favicon');

// custom modules
var dbConfig = require('./database/db.js');

// setup things
mongoose.Promise = require('bluebird');
mongoose.connect(dbConfig.url);

// Initialize express app
var app = express();

var PORT = process.env.PORT || 3000;

//Passport setup
app.use(session({
	secret: "**secret_key**",
	name: 'SessionCookie',
	resave: false,
	saveUninitialized: false
}));

//Middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));

// this sets up all of the routes
var routes = require('./routes/routes.js');

app.use("/", routes);

app.listen(PORT, "127.0.0.1");
console.log('Listening on Port', PORT);
