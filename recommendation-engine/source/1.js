// This depicts how weight-ages of hairProfile attributes influence recommendations

exports.user = {
  name: "Sri",
  hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"}
};

exports.stylists = [
  {
    name: "1",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"},
        score: 5,
        daysSinceRating: 5
      }
    ]
  },
  {
    name: "2",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"},
        score: 4,
        daysSinceRating: 5
      }
    ]
  },
  {
    name: "3",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "long"},
        score: 5,
        daysSinceRating: 350
      }
    ]
  },
  {
    name: "4",
    ratings: [
      {
        hairProfile: { sex: "female", ageGroup: "25-30", ethnicity: "indian", style: "long"},
        score: 5,
        daysSinceRating: 5
      },
      {
        hairProfile: { sex: "female", ageGroup: "25-30", ethnicity: "indian", style: "long"},
        score: 5,
        daysSinceRating: 50
      }
    ]
  }
];

exports.configuration = {
  minimumNumberOfRatings: 1,
  hairProfileAttributeWeights: {
    sex: 4,
    ageGroup: 3,
    ethnicity: 2,
    style: 1
  },
  recencyFactorRanges: [
    {min: 0, max: 30, factor: 10},
    {min: 30, max: 90, factor: 3},
    {min: 90, max: 365, factor: 2},
    {min: 365, max: 1000, factor: 1}
  ]
};