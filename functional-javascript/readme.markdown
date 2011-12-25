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

An implementation of the Fold / Reduce function *http://en.wikipedia.org/wiki/Fold_(higher-order_function)* as a higher order
function **reduce** in JavaScript to count the number of occurrences of negative numbers in a list:

* **forEach** created in **higher-order-functions.html** is reused as-is
* **countNegativeNumbers** is implemented to increment **negativeNumbersTillNow** if **currentNumber** is a negative number
* **reduce** is implemented which takes in three parameters:
    * **combine** is the actual combination function, in this case **countNegativeNumbers**
    * **base** is the initial value of the count
    * **list** is any list / array on which the reduction is to be performed

map.html
---

An implementation of the Map function as a higher order function **map** to double each number in a list:

* **forEach** created in **higher-order-functions.html** is reused as-is
* **doubleIt** doubles its parameter the parameter is a number
* **map** is implemented and it takes in two parameters:
    * **mappingFunction** is the function to apply on each item of the list
    * **list** is any list / array that is to be mapped

closure-1.html
---

A simple example of a closure implementation **getAreaFunction** which reads the **shape** argument and returns an
appropriate area function.

closure-2.html
---

In this example, we create a class **Shape** and show how private members can be implemented with closures.

* **Shape** contains a private method **area** generated reusing the closure function **getAreaFunction** from **closure-1.html**
* Each **Shape** instance has a public method **getArea** which returns the rounded off result of private function **area**

closure-3.html
---

This is a textbook example of how closures are used when event handlers are assigned in loops.

* Red boxes are assigned click handlers without a closure, the value of **redBoxId** for all red boxes in the last value of the loop
* Green boxes are assigned click handlers with closures, their click handlers have the correct values