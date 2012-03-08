var vows = require("vows");
var assert = require("assert");

var billingService = require("../lib/service.js");

exports.modelTestSuite = vows.describe("Billing System Tests");

exports.modelTestSuite.addBatch({
  "All bills": {
    topic: function () {
      billingService.removeAll(this.callback);
    },
    "must be removed": function (err, removed) {
      assert.equal(typeof removed, "number")
    }
  },
  "A new bill": {
    topic: function () {
      billingService.add({amount: 5}, this.callback);
    },
    "must be created": function (err, bill) {
      assert.ok(bill);
    },
    "must have a valid id": function (err, bill) {
      assert.ok(bill._id);
    },
    "must amount to 5": function (err, bill) {
      assert.ok(bill.amount, 5);
    }
  }
});