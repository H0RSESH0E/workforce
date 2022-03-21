const validate = require('./validate.js');
const { createDept, readDept } = require('./departmentsCrud.js');
const { createRole, readRoles } = require('./rolesCrud.js');
const { createEmployee, updateEmployee, readEmployees } = require('./employeesCrud.js');


const crud = async (request, userData) => {

    switch (request) {
        case 'view all departments':
            console.log('DEPARTMENTS');
            console.log('');
            return Promise.resolve(readDept());
        case 'view all roles':
            console.log('ROLES');
            console.log('');
            return Promise.resolve(readRoles());
        case 'view all employees':
            console.log('EMPLOYEES');
            console.log('');
            return Promise.resolve(readEmployees());
        case 'add a department':
            console.log('');
            console.log('ADDING: a department');
            console.log('');
            return Promise.resolve(createDept(userData));
        case 'add a role':
            console.log('');
            console.log('ADDING: a role');
            console.log('');
            return Promise.resolve(createRole(userData));
        case 'add an employee':
            console.log('');
            console.log('ADDING: an employee');
            console.log('');
            return Promise.resolve(createEmployee(userData));
        case 'update an employee role':
            console.log('');
            console.log('UPDATING: an employee');
            console.log('');
            return Promise.resolve(updateEmployee(userData));
    }
}

module.exports = crud;