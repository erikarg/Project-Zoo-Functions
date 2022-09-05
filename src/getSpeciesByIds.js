const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return data.species.filter(({ id: specieId }) =>
    ids.some((id) => specieId === id));
}

module.exports = getSpeciesByIds;
