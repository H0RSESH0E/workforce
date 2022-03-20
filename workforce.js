
const askTheUser = require('./utils/questions.js');
const crud = require('./utils/crud.js');

    let purpose = "start";


const process = () => {
    askTheUser('start')
    .then(userResponses => {
        purpose = userResponses.start_response;
        return askTheUser(purpose);
    })
    .then(userResponses => {
        if (userResponses.start_response === "end") {
            crud('display all');
            return;
        }
        crud(purpose, userResponses);
        process();
    });
};

process();
