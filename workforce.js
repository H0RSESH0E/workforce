
const askTheUser = require('./utils/questions.js');
const crud = require('./utils/crud.js');

<<<<<<< HEAD
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
=======
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
>>>>>>> FINAL
