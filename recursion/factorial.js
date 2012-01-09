console.log();
console.log("Factorial");
console.log("------");

function factorial(number) {
  if (number <= 1) return 1;
  else return number * factorial(number - 1);
}

console.log("factorial(5) = " + factorial(5));
console.log("factorial(65) = " + factorial(65));