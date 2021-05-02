// Write your solution in this file!
const employee = {
    name : "Jeremy",
    streetAddress: "546 street road"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}
  
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
      employee[key] = value;
      return employee
}

function deleteFromEmployeeByKey(object, key) {
    const newObj = Object.assign({}, object)
    delete newObj[key]
    return newObj
  }

  function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object
  }

