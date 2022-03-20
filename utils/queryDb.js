const db = require('../db/connection.js');

const queryDb = (sql, params) => {

// console.log('ALMOST DONE!', sql, params);

    db.promise().query(sql, params, (err, result) => {
        if (err) {
            console.log({ error: err.message });
            return;
        }
        console.log({
            message: 'success',
            data: result,
            password: ''
        });
        console.log("KAKER", result.data)
        return result.data;
    });
}

const closeDb = () => db.end();

module.exports = { queryDb, closeDb };