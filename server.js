var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");
//var db = require('./models')

var app = express();
app.use(express.static(path.join(__dirname, "..", 'public', "assets")));
	//app.use(express.static("public"));
var port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./controllers/apiRoutes.js")(app);

//app.use(express.static("public"));
app.listen(port);
console.log("listening on Port 3000");

// app.use(express.static("public"));
// db.sequelize.sync().then(()=> {
// 	app.listen(port);
// 	console.log("listening on Port 3000");
// });

