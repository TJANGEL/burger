//importing the ORM to create the functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne([id], function(res) {
      cb(res);
    });
  }
};

// export for controller
module.exports = burger;
