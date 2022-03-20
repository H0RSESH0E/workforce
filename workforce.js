const logTab = require('console.table');
const { closeDb } = require('./utils/queryDb.js');
const askTheUser = require('./utils/questions.js');
const crud = require('./utils/crud.js');

let purpose = "start";

askTheUser(purpose)
    .then(userResponses => {
        console.log(userResponses, "<-------------9");
        purpose = userResponses.start_response;
        return askTheUser(purpose);
    })
    .then(userResponses => {
        console.log("this was to: ", purpose, "<---------------8");
        return crud(purpose, userResponses)
    })
    .then(data => {
        let t = data.data;
        console.table('_________>', t);
    })    
    .then(() => console.log('POOP!!!'));

