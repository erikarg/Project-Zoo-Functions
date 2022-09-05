const data = require('../data/zoo_data');

function reducing(options, specie) {
  return specie.residents.reduce((acumulator, item) => {
    if (options.sex && item.sex === options.sex) acumulator.push(item.name);
    if (!options.sex) acumulator.push(item.name);
    return acumulator;
  }, []);
}

function getAnimalMap(options = { includeNames: false, sex: false, sorted: false }) {
  const construction = data.species.reduce((acumulator, item) => {
    if (options.includeNames) {
      const animalsList = reducing(options, item);
      if (options.sorted) animalsList.sort();
      acumulator[item.location].push({ [item.name]: animalsList });
    } else acumulator[item.location].push(item.name);
    return acumulator;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return construction;
}

module.exports = getAnimalMap;
