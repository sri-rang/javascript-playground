exports = {
  add: function (bill, callback) {

  },
  modify: function (bill, callback) {

  },
  remove: function (id, callback) {

  },
  list: function (callback) {

  },
  get: function (id, callback) {

  }
};

exports.tags = {
  add: function (billId, tag, callback) {

  },
  remove: function (billId, tag, callback) {

  }
};

exports.documents = {
  add: function (billId, documentId, callback) {

  },
  remove: function (billId, documentId, callback) {

  }
};

exports.comments = {
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