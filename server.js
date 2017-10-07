var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");
var apiRoutes = require("./controllers/apiRoutes.js");

var app = express();
var port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
app.listen(port);
console.log("listening on Port 3000");