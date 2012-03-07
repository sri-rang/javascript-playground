// Dependencies
var underscore = require("./underscore");

// User
var user = {
  name: "Sri",
  hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"}
};

// Stylists for my location and their Ratings
var stylists = [
  {
    name: "Roger",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"},
        score: 5
      }
    ]
  },
  {
    name: "Chinchilla",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"},
        score: 4
      }
    ]
  }
];

console.log(stylists.length);