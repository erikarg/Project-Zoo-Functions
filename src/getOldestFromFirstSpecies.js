const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idFilter = data.employees.find((employee) => employee.id === id);
  const species = data.species.find((animal) => idFilter.responsibleFor[0] === animal.id);
  const bigFilter = species.residents.sort((first, second) => second.age - first.age);
  return [bigFilter[0].name, bigFilter[0].sex, bigFilter[0].age];
}

module.exports = getOldestFromFirstSpecies;
