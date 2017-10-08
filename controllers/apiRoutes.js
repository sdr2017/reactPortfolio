var express = require("express");
var router = express.Router();
var path = require("path");

var keys = require("../keys.js");
var api_key = keys.keys.secret;
var domain = 'sandbox5e5714634bda4e73801a54418c3a1b59.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

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

	app.post('/api/contact', function(req, res) {
		console.log(req.body);

		var data = {
			from: req.body.email,
			to: 'sjdiazrivera@gmail.com',
			subject: req.body.subject,
			text: req.body.message
		};

		mailgun.messages().send(data, function (error, body) {
  			console.log(body);
		});
	});

}

module.exports = apiRoutes;