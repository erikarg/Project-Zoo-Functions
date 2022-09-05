const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allSpecies = data.species.reduce((result, item) => {
    const theResult = result; // linha adicionada para contornar o erro do lint de no-param-reassign;
    theResult[item.name] = item.residents.length;
    return result;
  }, {});
  if (!animal) {
    return allSpecies;
  }
  const quantity = data.species.find((animals) => animals.name === animal.specie);
  const sex = quantity.residents.filter((animals) => animals.sex === animal.sex);
  if (!animal.sex) {
    return quantity.residents.length;
  } if (animal.sex) {
    return sex.length;
  }
}

module.exports = countAnimals;
