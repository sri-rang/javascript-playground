// Dependencies
var _ = require("./underscore");

// Stylists and configuration
var source = require("./source/1.js");
var stylists = source.stylists;
var configuration = source.configuration;

// User
var user = {
  name: "Sri",
  hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"}
};

// Helpers
var sortDescending = function (a, b) {
  return a.userSpecificScore < b.userSpecificScore;
};
var summation = function (list) {
  var result = 0;
  list.forEach(function (item) {
    if (typeof item === "number") result += item;
  });
  return result;
};
var getHairProfileSimilarityFactor = function (hairProfile1, hairProfile2) {
  var result = 0;
  if (hairProfile1.sex === hairProfile2.sex)              result += configuration.weights.sex;
  if (hairProfile1.ageGroup === hairProfile2.ageGroup)    result += configuration.weights.ageGroup;
  if (hairProfile1.ethnicity === hairProfile2.ethnicity)  result += configuration.weights.ethnicity;
  if (hairProfile1.style === hairProfile2.style)          result += configuration.weights.style;
  return result;
};
var getUserSpecificRatings = function (rating) {
  var hairProfileSimilarityFactor = getHairProfileSimilarityFactor(user.hairProfile, rating.hairProfile);
  return rating.score * hairProfileSimilarityFactor;
};

var getRecommendedStylists = function () {
  stylists.forEach(function (stylist) {
    var userSpecificRatings = _.map(stylist.ratings, getUserSpecificRatings);
    stylist.userSpecificScore = summation(userSpecificRatings);
  });

  return stylists.sort(sortDescending);
};

getRecommendedStylists().forEach(function (stylist) {
  console.log(stylist.name, stylist.userSpecificScore);
});