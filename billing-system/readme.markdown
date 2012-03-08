Original requirements
===

Here's how they describe what they want:

    There will be a MongoDB Database which will be storing Billing information with the following attributes:
    - non-Integer UID
    - Amount (Float)
    - List of Comments
    - List of Tags
    - List of attached Documents (by document UID, you won't have to worry about that)

    Furthermore, this "Billing Information" object needs to be reflected in a Node.JS object with CRUD methods for:
    -  Comments
    -  Tags
    -  Documents (by  UID)

    * Module + Tests are sufficient for now, the UI can wait a bit.

    * It's (MongoDB library) your choice.

Get started
===

* Install Node 0.6.x, MongoDB, Git

* Clone this repo

* Start the terminal, navigate to the "billing-system" folder

* Install dependencies

    $ npm install -d

* Start MongoDB instance

    $ mongod

* Run tests

    $ npm test


Test Results
===

Console
---

    $ npm test
    ♢ Billing System Tests

      Add a new bill
        ✓ bill must be created
        ✓ bill must have an id
        ✓ bill must amount to 5
      Add a comment
        ✓ bill must have comments
        ✓ bill must have correct number of comments
        ✓ comment must have correct bill id
        ✓ comment must have correct text
      Modify a bill
        ✓ bill must amount to 10
      Remove a bill
        ✓ bill must be deleted
      Add a tag
        ✓ bill must have tags
        ✓ bill must have correct number of tags
        ✓ bill must contain newly created tag
      Add a document
        ✓ bill must have documents
        ✓ bill must have correct number of documents
        ✓ bill must contain newly created document
      Remove a tag
        ✓ bill must not contain tag
      Remove a documents
        ✓ bill must not contain document


MongoDB Snapshot
---

    $ db.bills.find().pretty()
    { "amount" : 5, "_id" : ObjectId("4f58835de5cde77e5a000001") }
    { "amount" : 10, "_id" : ObjectId("4f58835de5cde77e5a000002") }
    {
      "_id" : ObjectId("4f58835de5cde77e5a000004"),
      "amount" : 5,
      "tags" : [
        "cool"
      ]
    }
    { "_id" : ObjectId("4f58835de5cde77e5a000005"), "amount" : 5, "tags" : [ ] }
    {
      "_id" : ObjectId("4f58835de5cde77e5a000006"),
      "amount" : 5,
      "documents" : [
        "docId1"
      ]
    }
    {
      "_id" : ObjectId("4f58835de5cde77e5a000007"),
      "amount" : 5,
      "documents" : [ ]
    }
    { "amount" : 5, "_id" : ObjectId("4f58835de5cde77e5a000008") }
    >

    $ db.comments.find().pretty()
    {
      "text" : "this is cool",
      "user" : "Sri",
      "billId" : ObjectId("4f58835de5cde77e5a000008"),
      "_id" : ObjectId("4f58835de5cde77e5a000009")
    }

Code overview
===

* External consumers of the billing system must require("./lib/service.js")
* ./lib/service.js exposes CRUD methods for Bills, Tags, Documents and Comments
* Database interaction is confined to ./lib/model.js which depends on MongoJS and is consumed by ./lib/service.js
* ./test/tests.js consumes ./lib/service.js (billingService) and shows how various exposed members are used