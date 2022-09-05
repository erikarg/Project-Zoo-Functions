const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const children = entrants.filter((child) => child.age < 18).length;
  const adults = entrants.filter((adult) => adult.age >= 18 && adult.age <= 49).length;
  const seniors = entrants.filter((senior) => senior.age >= 50).length;
  const count = {
    child: children,
    adult: adults,
    senior: seniors,
  };
  return count;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const math = {
    child: (countEntrants(entrants).child * data.prices.child),
    adult: (countEntrants(entrants).adult * data.prices.adult),
    senior: (countEntrants(entrants).senior * data.prices.senior),
  };
  return math.child + math.adult + math.senior;
}

module.exports = { calculateEntry, countEntrants };
