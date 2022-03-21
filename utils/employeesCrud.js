const { queryDb } = require('./queryDb.js');

// INSERT a record into the roles table
const createEmployee = (userData) =>{
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = Object.values(userData);
    return Promise.resolve(queryDb(sql, params));
}

// INSERT a record into the roles table
const updateEmployee = (userData) =>{
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const params = Object.values(userData);
    return Promise.resolve(queryDb(sql, params));
}

// SELECT * FROM employees table
const readEmployees = () =>{
    const sql =
    //  `SELECT * FROM employees`;
    `SELECT 
    empT.id, 
    CONCAT_WS(' ', empT.first_name, empT.last_name) AS Name,
    roles.title,
    departments.dept_name,
    roles.salary,
    CONCAT_WS(' ', manT.first_name, manT.last_name) AS Manager 
    FROM employees empT
    LEFT JOIN employees manT
    ON empT.manager_id = manT.id
    INNER JOIN roles
    ON empT.role_id = roles.id
    INNER JOIN departments
    ON roles.dept_id = departments.id`;
    return Promise.resolve(queryDb(sql));
}


module.exports = { createEmployee, updateEmployee, readEmployees };