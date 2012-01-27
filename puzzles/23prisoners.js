var prisoners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var captain = 1;
var counter = 0;
var numberOfVisits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var switches = [Math.round(Math.random()), Math.round(Math.random())];

var getRandomPrisoner = function () {
  return prisoners[Math.floor(Math.random() * prisoners.length)];
};

var toggleDummySwitch = function () {
  switches[1] = !switches[1];
};

while (counter != (prisoners.length - 1) * 2) {
  var randomPrisoner = getRandomPrisoner();
  numberOfVisits[randomPrisoner - 1] += 1;
  if (randomPrisoner === captain) {
    switch (switches[0]) {
      case true:
        counter += 1;
        break;
      case false:
        toggleDummySwitch();
        break;
    }
    switches[0] = !switches[0];
  } else {
    switch (switches[0]) {
      case true:
        toggleDummySwitch();
        break;
      case false:
        if (numberOfVisits[randomPrisoner - 1] <= 2) {
          switches[0] = true;
        } else {
          toggleDummySwitch();
        }
        break;
    }
  }
}

console.log(prisoners);
console.log(captain);
console.log(counter);
console.log(numberOfVisits);
console.log(switches);