const logTab = require('console.table');
const inquirer = require('inquirer');
const askTheUser = require('./utils/questions.js');
const crud = require('./utils/crud.js');







    inquirer.prompt([
    
        {
            type: "input",
            name: "username",
            message: "What's your name?"
          }
          ])
        .then((answers) => {
            console.log(`Hello ${answers.username}!`)
        })
        .catch((error) => {
          if (error.isTtyError) {
            console.log("Your console environment is not supported!")
          } else {
            console.log(error)
          }
      }).then(() => console.log('please end'));

