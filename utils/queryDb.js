const db = require('../db/connection.js');

const queryDb = (sql, params) => {

    db.query(sql, params, (err, result) => {
        if (err) {
          console.log({ error: err.message });
          return;
        }
        console.log({
          message: 'success',
          data: result
        });
      });
      db.end();
}

module.exports = { queryDb };