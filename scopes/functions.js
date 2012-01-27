var scope = "global";
var whichScopeIsIt = function () {
  var scope = "local";
  return function () {
    return scope;
  };
};
console.log(whichScopeIsIt()());

var aCounter = function () {
  aCounter.count = ++aCounter.count || 0;
  return function () {
    return aCounter.count;
  };
};

console.log(aCounter()());
console.log(aCounter()());