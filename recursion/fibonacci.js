console.log();
console.log("Fibonacci");
console.log("------");

function fibonacci(times, twoNumbersBack, oneNumberBack) {
  if (times === 0) {
    return twoNumbersBack;
  } else if (times === 1) {
    return oneNumberBack;
  } else if (times === 2) {
    return oneNumberBack + twoNumbersBack;
  } else {
    return fibonacci(times - 1, oneNumberBack, oneNumberBack + twoNumbersBack);
  }
}

console.log("fibonacci(5, 0, 1) = " + fibonacci(5, 0, 1));
console.log("fibonacci(65, 0, 1) = " + fibonacci(65, 0, 1));