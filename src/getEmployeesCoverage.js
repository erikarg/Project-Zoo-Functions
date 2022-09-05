const data = require('../data/zoo_data');

function getEmployeesCoverage(name, id) {
  if (!name && !id) {
    return Object.entries(data.employees);
  }
  if (id !== data.employees.map((validId) => validId.id)) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
