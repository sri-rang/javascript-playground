console.log();
console.log("Towers Of Hanoi");
console.log("------");

function towersOfHanoi(number) {
  if( number === 1) return 1;
  else return 2 * towersOfHanoi(number-1) + 1;
}

console.log("towersOfHanoi(3) = " + towersOfHanoi(3));
console.log("towersOfHanoi(11) = " + towersOfHanoi(11));