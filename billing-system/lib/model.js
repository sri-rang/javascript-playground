var database = "BillingSystem";
var collections = [
  "bills",
  "comments"
];
var db = require("mongojs").connect(database, collections);

exports.bills = {
  add: function (bill, callback) {
    db.bills.save(bill, callback);
  },
  modify: function (bill, callback) {
    db.bills.update({_id: bill._id}, bill, callback);
  },
  remove: function (billId, callback) {
    if (typeof billId === "string") billId = db.ObjectId(billId);
    db.bills.remove({_id: billId}, callback);
  },
  removeAll: function (callback) {
    db.bills.remove(callback);
  },
  list: function (callback) {
    db.bills.find(callback);
  },
  get: function (billId, callback) {
    if (typeof billId === "string") billId = db.ObjectId(billId);
    db.bills.findOne({_id: billId}, callback);
  }
};

exports.tags = {
  add: function (billId, tag, callback) {
    if (typeof billId === "string") billId = db.ObjectId(billId);
    db.bills.update({_id: billId}, { $addToSet: {tags: tag} }, callback)
  },
  remove: function (billId, tag, callback) {
    if (typeof billId === "string") billId = db.ObjectId(billId);
    db.bills.update({_id: billId}, { $pull: {tags: tag} }, callback)
  }
}

exports.documents = {
  add: function (billId, document, callback) {
    if (typeof billId === "string") billId = db.ObjectId(billId);
    db.bills.update({_id: billId}, { $addToSet: {documents: document} }, callback)
  },
  remove: function (billId, document, callback) {
    if (typeof billId === "string") billId = db.ObjectId(billId);
    db.bills.update({_id: billId}, { $pull: {documents: document} }, callback)
  }
};

exports.comments = {
  add: function (comment, callback) {
    if (typeof comment.billId === "string") comment.billId = db.ObjectId(comment.billId);
    db.comments.save(comment, callback);
  },
  modify: function (comment, callback) {
    db.comments.update({_id: comment._id}, comment, callback);
  },
  remove: function (commentId, callback) {
    if (typeof commentId === "string") commentId = db.ObjectId(commentId);
    db.comments.remove({_id: commentId}, callback);
  },
  list: function (billId, callback) {
    if (typeof billId === "string") billId = db.ObjectId(billId);
    db.comments.find({billId: billId}, callback);
  },
  get: function (commentId, callback) {
    if (typeof commentId === "string") commentId = db.ObjectId(commentId);
    db.comments.findOne({_id: commentId}, callback);
  }
};