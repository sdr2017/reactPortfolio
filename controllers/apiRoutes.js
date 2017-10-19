var express = require("express");
var router = express.Router();
var path = require("path");
var bodyParser = require("body-parser");

var api_key;
if (process.env.MAILGUNSECRET) {
	api_key = process.env.MAILGUNSECRET;
} else {
	api_key = require("../keys.js").keys.secret;
}
var domain = 'sandbox5e5714634bda4e73801a54418c3a1b59.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var db = require('../models');

var apiRoutes = function(app){
	//email submitted 
	app.get("/submitted", function(req, res) {
		// res.send("contact request")
	    res.sendFile(path.join(__dirname, "..", "public", "submitted.html"));
	});

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

	app.post('/contact', function(req, res) {

		console.log(req.body);

		if (req.body.email !=='' && req.body.subject !=='' && req.body.message !=='        ') {

			if (req.body.checked == 'on') {

				db.emailAddress.create({emailAddress: req.body.email}).then(function(dbPost) {
					console.log(req.body);
				}).catch(function(error){
					res.status(400).send(error);
					return;
				});
			};

			var data = {
				from: req.body.email,
				to: 'sjdiazrivera@gmail.com',
				subject: req.body.subject,
				text: req.body.message
			};

			console.log(data);

			mailgun.messages().send(data, function (error, body) {
				if(!error){
					console.log(body);
					res.redirect('/submitted');
				}
			});
		}

		else {
			console.log("THERE ARE EMPTY FIELDS");
			return
		}
	});


}

module.exports = apiRoutes;