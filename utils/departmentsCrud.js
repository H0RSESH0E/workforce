const { queryDb } = require('./queryDb.js');

// INSERT a record into the departments table
const createDept = (userData) =>{
    const sql = `INSERT INTO departments (dept_name) VALUES (?)`;
    const params = [userData.dept_name];
    return queryDb(sql, params);
}

// SELECT * FROM departments table
const readDept = () =>{
    const sql = `SELECT * FROM departments`;
    return queryDb(sql);
}

module.exports = { createDept, readDept }