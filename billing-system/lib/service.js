var model = require("./model.js");

module.exports = {
  add: function (bill, callback) {
    model.bill.add(bill, callback);
  },
  modify: function (bill, callback) {
    model.bill.modify(bill, callback);
  },
  remove: function (billId, callback) {
    model.bill.remove(billId, callback);
  },
  removeAll: function (callback) {
    model.bill.removeAll(callback);
  },
  list: function (callback) {
    model.bill.list(callback);
  },
  get: function (billId, callback) {
    model.bill.get(billId, callback);
  },

  tags: {
    add: function (billId, tag, callback) {

    },
    remove: function (billId, tag, callback) {

    }
  },

  documents: {
    add: function (billId, documentId, callback) {

    },
    remove: function (billId, documentId, callback) {

    }
  },

  comments: {
    add: function (billId, comment, callback) {
    },
    edit: function (comment, callback) {
    },
    remove: function (commentId, callback) {
    },
    removeAll: function (billId, callback) {
    },
    list: function (billId, callback) {
    },
    get: function (commentId, callback) {
    }
  }
}