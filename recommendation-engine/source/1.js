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
        score: 5
      }
    ]
  },
  {
    name: "2",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "short"},
        score: 4
      }
    ]
  },
  {
    name: "3",
    ratings: [
      {
        hairProfile: { sex: "male", ageGroup: "25-30", ethnicity: "indian", style: "long"},
        score: 5
      }
    ]
  },
  {
    name: "4",
    ratings: [
      {
        hairProfile: { sex: "female", ageGroup: "25-30", ethnicity: "indian", style: "long"},
        score: 5
      },
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