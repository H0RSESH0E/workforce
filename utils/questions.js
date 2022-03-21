const inquirer = require('inquirer');

const askTheUser = (purpose) => {
    return inquirer.prompt([
    
        {
            type: 'list',
            message: "What would you like to do?",
            name: 'start_response',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'end'],
            when: (purpose === "start")

        },
    
    
    {
        type: 'input',
        message: "What is the name of the new department?",
        name: 'dept_name',
        when: (purpose === "add a department"),

    },
    {
        type: 'input',
        message: "What is the title of the new role?",
        name: 'title',
        when: (purpose === "add a role"),

    },
    {
        type: 'input',
        message: "What is the salary for the new role?",
        name: 'salary',
        when: (purpose === "add a role"),

    },
    {
        type: 'input',
        message: "In what department number is the new role?",
        name: 'dept_id',
        when: (purpose === "add a role"),

    },
    {
        type: 'input',
        message: "What is the first name of the new employee?",
        name: 'first_name',
        when: (purpose === "add an employee"),

    },
    {
        type: 'input',
        message: "What is the last name of the new employee?",
        name: 'last_name',
        when: (purpose === "add an employee"),

    },
    {
        type: 'input',
        message: "What is the role id number of the new employee?",
        name: 'role_id',
        when: (purpose === "add an employee"),

    },
    {
        type: 'input',
        message: "What is the employee's manager's id number?",
        name: 'manager_id',
        when: (purpose === "add an employee"),

    },
    {
        type: 'input',
        message: "What is the id number of the employees new role?",
        name: 'role_id',
        when: (purpose === "update an employee role"),

    },
    {
        type: 'input',
        message: "What is the employee's id number?",
        name: 'id',
        when: (purpose === "update an employee role"),

    }
   
    ]);
};
module.exports = askTheUser;