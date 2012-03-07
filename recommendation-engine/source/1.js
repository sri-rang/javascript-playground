// This depicts how weight-ages of hairProfile attributes influence recommendations

exports.stylists = [
  {
    name: "ExactMatch-HighRating",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"},
        score: 5
      }
    ]
  },
  {
    name: "ExactMatch-AverageRating",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"},
        score: 4
      }
    ]
  },
  {
    name: "CloseMatch-HighRating",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "long"},
        score: 5
      }
    ]
  },
  {
    name: "AverageMatch-HighRating",
    ratings: [
      {
        hairProfile: { sex: "female", ageGroup: "25-30", ethnicity: "indian", style: "long"},
        score: 5
      }
    ]
  }
];

exports.configuration = {
  weights: {
    sex: 4,
    ageGroup: 3,
    ethnicity: 2,
    style: 1
  }
};