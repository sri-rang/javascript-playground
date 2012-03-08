var model = require("./model.js");

module.exports = {
  add: function (bill, callback) {
    model.bills.add(bill, callback);
  },
  modify: function (bill, callback) {
    model.bills.modify(bill, callback);
  },
  remove: function (billId, callback) {
    model.bills.remove(billId, callback);
  },
  removeAll: function (callback) {
    model.bills.removeAll(callback);
  },
  list: function (callback) {
    model.bills.list(callback);
  },
  get: function (billId, callback) {
    model.bills.get(billId, callback);
  },

  tags: {
    add: function (billId, tag, callback) {
      model.tags.add(billId, tag, callback);
    },
    remove: function (billId, tag, callback) {
      model.tags.remove(billId, tag, callback);
    }
  },

  documents: {
    add: function (billId, document, callback) {
      model.documents.add(billId, document, callback);
    },
    remove: function (billId, document, callback) {
      model.documents.remove(billId, document, callback);
    }
  },

  comments: {
    add: function (billId, comment, callback) {
      comment.billId = billId;
      model.comments.add(comment, callback);
    },
    modify: function (comment, callback) {
      model.comments.modify(comment, callback);
    },
    remove: function (commentId, callback) {
      model.comments.remove(commentId, callback);
    },
    list: function (billId, callback) {
      model.comments.list(billId, callback);
    },
    get: function (commentId, callback) {
      model.comments.get(commentId, callback);
    }
  }
};