const { queryDb } = require('./queryDb.js');

// INSERT a record into the departments table
const createDept = (userData) =>{
    const sql = `INSERT INTO departments (dept_name) VALUES (?)`;
    const params = [userData.dept_name];
    return Promise.resolve(queryDb(sql, params));
}

// SELECT * FROM departments table
const readDept =  () => {
    const sql = `
    SELECT departments.dept_name, departments.id
    FROM departments`;
    return Promise.resolve(queryDb(sql));
}

module.exports = { createDept, readDept }