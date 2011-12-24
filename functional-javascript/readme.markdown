This is a collection of examples of functional programming implemented in JavaScript.

higher-order-functions.html
---

A higher order function *forEach* is created which takes two parameters:

* a list
* a function that is to operate on each list item

Two examples of *forEach*'s usage:

* first usage involves passing a list *listOfThings* and a predefined function *logItem*
    * *logItem* is called for each item in *listOfThings*
* second usage is similar except an *anonymous function* is created and passed instead of *logItem*
    * the *anonymous function* is called for each item in *anotherListOfThings*