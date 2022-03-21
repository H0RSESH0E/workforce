const db = require('../db/connection.js');
// const logTab = require('console.table');


const queryDb = (sql, params) => {

    // console.log('DB -9 QUERY');

    return db.promise().query(sql, params)
        .then(([rows]) => {
            return rows;
        });
}

module.exports = { queryDb };