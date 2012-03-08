var vows = require("vows");
var assert = require("assert");

var billingService = require("../lib/service.js");

exports.modelTestSuite = vows.describe("Billing System Tests");

exports.modelTestSuite.addBatch({
  "Add a new bill": {
    topic: function () {
      billingService.add({amount: 5}, this.callback);
    },
    "bill must be created": function (err, bill) {
      assert.ok(bill);
    },
    "bill must have an id": function (err, bill) {
      assert.ok(bill._id);
    },
    "bill must amount to 5": function (err, bill) {
      assert.ok(bill.amount, 5);
    }
  },
  "Modify a bill": {
    topic: function () {
      var callback = this.callback;
      billingService.add({amount: 5}, function (err, bill) {
        bill.amount = 10;
        billingService.modify(bill, function (err, modified) {
          callback(err, bill._id);
        });
      })
    },
    "bill must amount to 10": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.equal(bill.amount, 10);
      });
    }
  },
  "Remove a bill": {
    topic: function () {
      var callback = this.callback;
      billingService.add({amount: 5}, function (err, bill) {
        billingService.remove(bill._id, function (err, removed) {
          callback(bill._id);
        });
      });
    },
    "bill must be deleted": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.fail(bill);
      });
    }
  },
  "Add a tag": {
    topic: function () {
      var callback = this.callback;
      billingService.add({amount: 5}, function (err, bill) {
        billingService.tags.add(bill._id, "cool", function (err, added) {
          callback(err, bill._id);
        });
      });
    },
    "bill must have tags": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.ok(bill.tags);
      });
    },
    "bill must have correct number of tags": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.equal(bill.tags.length, 1);
      });
    },
    "bill must contain newly created tag": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.equal(bill.tags.indexOf("color"), 0);
      });
    }
  },
  "Remove a tag": {
    topic: function () {
      var callback = this.callback;
      billingService.add({amount: 5}, function (err, bill) {
        billingService.tags.add(bill._id, "cool", function (err, added) {
          billingService.tags.remove(bill._id, "cool", function (err, removed) {
            callback(err, bill._id);
          });
        });
      });
    },
    "bill must not contain tag": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.equal(bill.tags.indexOf("color"), -1);
      });
    }
  },
  "Add a document": {
    topic: function () {
      var callback = this.callback;
      billingService.add({amount: 5}, function (err, bill) {
        billingService.documents.add(bill._id, "docId1", function (err, added) {
          callback(err, bill._id);
        });
      });
    },
    "bill must have documents": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.ok(bill.documents);
      });
    },
    "bill must have correct number of documents": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.equal(bill.documents.length, 1);
      });
    },
    "bill must contain newly created document": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.equal(bill.documents.indexOf("docId1"), 0);
      });
    }
  },
  "Remove a documents": {
    topic: function () {
      var callback = this.callback;
      billingService.add({amount: 5}, function (err, bill) {
        billingService.documents.add(bill._id, "docId1", function (err, added) {
          billingService.documents.remove(bill._id, "docId1", function (err, removed) {
            callback(err, bill._id);
          });
        });
      });
    },
    "bill must not contain document": function (err, billId) {
      billingService.get(billId, function (err, bill) {
        assert.equal(bill.documents.indexOf("docId1"), -1);
      });
    }
  },
  "Add a comment": {
    topic: function () {
      var callback = this.callback;
      billingService.add({amount: 5}, function (err, bill) {
        billingService.comments.add(bill._id, {text: "this is cool", user: "Sri"}, function (err, comment) {
          callback(err, bill._id);
        });
      });
    },
    "bill must have comments": function (err, billId) {
      billingService.comments.list(billId, function (err, comments) {
        assert.ok(comments);
      });
    },
    "bill must have correct number of comments": function (err, billId) {
      billingService.comments.list(billId, function (err, comments) {
        assert.equal(comments.length, 1);
      });
    },
    "comment must have correct bill id": function (err, billId) {
      billingService.comments.list(billId, function (err, comments) {
        assert.equal(comments[0].billId.toString(), billId.toString());
      });
    },
    "comment must have correct text": function (err, billId) {
      billingService.comments.list(billId, function (err, comments) {
        assert.equal(comments[0].text, "this is cool");
      });
    }
  }
});