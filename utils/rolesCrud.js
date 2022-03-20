const { queryDb } = require('./queryDb.js');

// INSERT a record into the roles table
const createRole = (userData) =>{
    const sql = `INSERT INTO roles (title, salary, dept_id) VALUES (?,?,?)`;
    const params = Object.values(userData);
    queryDb(sql, params);
}

// SELECT * FROM roles table
const readRoles = () =>{
    const sql = `SELECT * FROM roles`;
    queryDb(sql);
}


module.exports = { createRole, readRoles }