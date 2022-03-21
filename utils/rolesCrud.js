const { queryDb } = require('./queryDb.js');

// INSERT a record into the roles table
const createRole = (userData) =>{
    const sql = `INSERT INTO roles (title, salary, dept_id) VALUES (?,?,?)`;
    const params = Object.values(userData);
    return Promise.resolve(queryDb(sql, params));
}

// SELECT * FROM roles table
const readRoles = () =>{
    const sql = `
    SELECT roles.title, roles.id, departments.dept_name, roles.salary 
    FROM roles 
    LEFT JOIN departments 
    ON roles.dept_id = departments.id`;
    return Promise.resolve(queryDb(sql));
}


module.exports = { createRole, readRoles }