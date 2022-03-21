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
    const sql = `SELECT * FROM employees`;
    return Promise.resolve(queryDb(sql));
}


module.exports = { createEmployee, updateEmployee, readEmployees };