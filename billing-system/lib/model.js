var database = "BillingSystem";
var collections = [
  "bills",
  "comments"
];
var db = require("mongojs").connect(database, collections);

exports.bill = {
  add: function (bill, callback) {
    db.bills.save(bill, callback);
  },
  modify: function (bill, callback) {
    db.bills.save(bill, callback);
  },
  remove: function (id, callback) {
    if (typeof id === "string") id = db.ObjectId(id);
    db.bills.remove({id: id}, callback);
  },
  removeAll: function (callback) {
    db.bills.remove(callback);
  },
  list: function (callback) {
    db.bills.find(callback);
  },
  get: function (id, callback) {
    if (typeof id === "string") id = db.ObjectId(id);
    db.bills.findOne({id: id}, callback);
  }
};