const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./template");
const writer = fs.writeFile;

function userQuestions(){
    return inquirer.prompt(
        [
            {
                type:"input",
                name:"Name",
                message:"What is the name of your project?"
            }
        ]
    )
}

function init(){
    try{
        const responses = userQuestions();
        const generateDoc = template(responses);
        writer("./dest/readme2.md", generateDoc);
    } catch(error){
        console.log(error);
    }
}

init();