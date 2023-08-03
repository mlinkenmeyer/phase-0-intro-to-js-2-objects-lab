// Write your solution in this file!
const employee = {
  name: "Madison",
  streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const UpdatedEmployee = { ...employee };
  delete UpdatedEmployee[key];
  return UpdatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
