const db = require('../db/connection.js');
// const logTab = require('console.table');


const queryDb = (sql, params) => {

    db.query(sql, params, (err, result) => {
        if (err) {
          console.log({ error: err.message });
          return;
        }
        // console.log({
        //   message: 'success',
        //   data: result
        // })
        console.log('\033[2J');
        console.table(result);

      });
    //   db.end();
}

module.exports = { queryDb };