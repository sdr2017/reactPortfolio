var express = require("express");
var router = express.Router();
var path = require("path");

var apiRoutes = function(app){
	//homepage
	app.get("/", function(req, res) {
		// res.send("home request")
	    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
	});

	//graphics
	app.get("/graphics", function(req, res) {
		// res.send("home request")
	    res.sendFile(path.join(__dirname, "..", "public", "graphics.html"));
	});

	//web
	app.get("/web", function(req, res) {
		// res.send("home request")
	    res.sendFile(path.join(__dirname, "..", "public", "web.html"));
	});

	//contact 
	app.get("/contact", function(req, res) {
		// res.send("contact request")
	    res.sendFile(path.join(__dirname, "..", "public", "contact.html"));
	});
}

module.exports = apiRoutes;