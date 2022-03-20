const logTab = require('console.table');
const { closeDb } = require('./utils/queryDb.js');
const askTheUser = require('./utils/questions.js');
const crud = require('./utils/crud.js');

let purpose = "start";

// askTheUser(purpose)
//     .then(userResponses => {

//         console.log(userResponses, "<-------------9");
//         purpose = userResponses.start_response;
//         return askTheUser(purpose);

//     })
//     .then(userResponses => {

//         console.log("this was to: ", purpose, "<---------------8");
//         crud(purpose, userResponses).then(table => { return table; });

//     })
//     .then(data => {

//         let t = data.data;
//         console.table('_________>', t);
//     })
//     .then(() => console.log('POOP!!!'));

function viewAllDepartments(){
    getAllDepartments()
       .then(([rows]) => {
        let departments = rows;
        console.log("\n");
        console.table(departments);
      })
  }

const run = async () => {
    let dbEdit = {};

    let task = await askTheUser(purpose);
    purpose = task.start_response;
    if (purpose !== 'view all departments' || purpose !== 'view all roles' || purpose !== 'view all employees') {
        dbEdit = await askTheUser(purpose);
    }
    let table = await crud(purpose, dbEdit);
    console.table('**', table);

}

run();