// dependencies
var express = require("express");

var router = express.Router();

// Import models
var burger = require("../models/burger.js");
// get all
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
// add
router.post("/", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});
// update
router.put("/:id", function(req, res) {
  var id = req.params.id;

  console.log("id", id);

  burger.updateOne(id, function() {
    res.redirect("/");
  });
});

module.exports = router;
