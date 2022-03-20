const validate = require('./validate.js');
const { createDept, readDept } = require('./departmentsCrud.js');
const { createRole, readRoles } = require('./rolesCrud.js');
const { createEmployee, updateEmployee, readEmployees } = require('./employeesCrud.js');


const crud = async (request, userData) => {

    switch (request) {
        case 'view all departments':
            return readDept();
            
        case 'view all roles':
            return readRoles();
            
        case 'view all employees':
            return readEmployees();
            
        case 'add a department':
            return createDept(userData)
            
        case 'add a role':
            return createRole(userData);
            
        case 'add an employee':
            return createEmployee(userData);
            
        case 'update an employee role':
            return updateEmployee(userData);
            
    }
}

module.exports = crud;