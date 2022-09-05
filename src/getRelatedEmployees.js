const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const employees = data.employees.filter((employee) => employee.managers.includes(managerId));
  const names = employees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  if (isManager(managerId)) {
    return names;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
