// Pull in required dependencies
var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

// Create the routes and associated logic
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// needs edit
router.post("/", function(req, res) {
  burger.create(req.body.burger_name, function(data) {
    res.redirect("/");
  });
});

// needs edit
router.put("/:id", function(req, res) {
  var id = req.params.id;

  console.log("id", id);

  burger.update(id, function() {
    res.redirect("/");
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
