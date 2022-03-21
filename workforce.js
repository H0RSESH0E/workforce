
const askTheUser = require('./utils/questions.js');
const crud = require('./utils/crud.js');
const table = require('console.table');

// let purpose = "start";

const start = (purpose) => {

    askTheUser(purpose)
    .then(userResponses => {
        // console.log(userResponses);
        purpose = userResponses.start_response;
        (purpose === 'end') ? process.exit() : console.log('');
        return askTheUser(purpose);
    })
    .then(userResponses => {
        // console.log("this was to: ",purpose);
        // console.log('goop', userResponses);
        return crud(purpose, userResponses);
    })
    .then(input => {
            console.table(input);
            console.log('');
            console.log('');
            start('start');
    });
    

}

start('start');
