var db = require("../models");

module.exports = function(app) {
  
  app.post("/contact", function(req, res) {
    db.Email.create(req.body).then(function(dbEmail) {
      res.json(dbEmail);
    });
  });

};
