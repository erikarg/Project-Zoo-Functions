const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const species = data.species.filter((objects) => objects.name === animal)[0].residents;
  return species.every((specie) => specie.age >= age);
}

module.exports = getAnimalsOlderThan;
