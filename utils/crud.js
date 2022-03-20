const validate = require('./validate.js');
const { createDept, readDept } = require('./departmentsCrud.js');
const { createRole, readRoles } = require('./rolesCrud.js');
const { createEmployee, updateEmployee, readEmployees } = require('./employeesCrud.js');


const crud = (request, userData) => {

    switch (request) {
        case 'view all departments':
            readDept();
            break;
        case 'view all roles':
            readRoles();
            break;
        case 'view all employees':
            readEmployees();
            break;
        case 'add a department':
            createDept(userData)
            break;
        case 'add a role':
            createRole(userData);
            break;
        case 'add an employee':
            createEmployee(userData);
            break;
        case 'update an employee role':
            updateEmployee(userData);
            break;
    }
}

module.exports = crud;