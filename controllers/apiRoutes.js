var express = require("express");
var router = express.Router();
var path = require("path");

var apiRoutes = function(app){
	//homepage
	app.get("/", function(req, res) {
	    res.sendFile(__dirname + "/public/index.html");
	});
}

module.exports = apiRoutes;