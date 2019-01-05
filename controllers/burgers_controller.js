// Pull in required dependencies
var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

// get all burgers
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// create a new burger
router.post("/burgers", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});

// update the list of burgers
router.put("/burgers/:id", function(req, res) {
  var id = req.params.id;

  // console.log("id", id);

  burger.updateOne(id, function() {
    res.redirect("/");
  });
});

// delete a devoured burger
// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
