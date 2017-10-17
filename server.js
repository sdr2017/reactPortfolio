var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");

var app = express();
// app.use(express.static(path.join(__dirname,'..', 'public')));
var port = process.env.PORT || 3000;

var db = require('./models')

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

require("./controllers/apiRoutes.js")(app);

// app.listen(port);
// console.log("listening on Port 3000");

db.sequelize.sync().then(()=> {
	app.listen(port);
	console.log("listening on Port 3000");
});

