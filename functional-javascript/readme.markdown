This is a collection of examples of functional programming implemented in JavaScript.

higher-order-functions.html
---

A higher order function **forEach** is created which takes two parameters:

* a list
* a function that is to operate on each list item

Two examples of **forEach**'s usage:

* first usage involves passing a list **listOfThings** and a predefined function **logItem**
    * **logItem** is called for each item in **listOfThings**
* second usage is similar except an **anonymous function** is created and passed instead of **logItem**
    * the **anonymous function** is called for each item in **anotherListOfThings**

reduce.html
---

An implementation of higher order function [**fold/reduce**](http://en.wikipedia.org/wiki/Fold_(higher-order_function)) in
JavaScript to count the number of negative numbers in a list:

* **forEach** created in **higher-order-functions.html** is reused as-is
* **countNegativeNumbers** is implemented to increment **negativeNumbersTillNow** if **currentNumber** is a negative number
* **reduce** is implemented which takes in three parameters:
    * **combine** is the actual combination function, in this case **countNegativeNumbers**
    * **base** is the initial value of the count
    * **list** is any list / array on which the reduction is to be performed