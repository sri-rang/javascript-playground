var vows = require("vows");
var assert = require("assert");

exports.modelTestSuite = vows.describe("Test Suite");
//
//exports.modelTestSuite.addBatch({
//  "Projects": {
//    topic: function () {
//      model.projectsList("srirangan@gmail.com", this.callback)
//    },
//    "must be empty": function (err, projects) {
//      assert.equal(projects.length, 0);
//    }
//  }
//});