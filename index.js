// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"userName",
        message:"What is your GitHub username? ",
        check: function(response){
            if(response.length < 1){
                return console.log("Must enter valid GitHub username");
            }
            return true;
        }
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address? ",
        check: function(response){
            if(response.length < 1){
                return console.log("Must enter valid email address");
            }
            return true;
        }
    },
    {
        type:"input",
        name:"projectName",
        message:"What is the name of your project? ",
        check: function(response){
            if(response.length < 1){
                return console.log("Must enter valid project name");
            }
            return true;
        }
    },
    {
        type:"input",
        name:"description",
        message:"Enter your project description: ",
        check: function(response){
            if(response.length < 1){
                return console.log("Must enter valid project description");
            }
            return true;
        }
    },
    {
        type:"input",
        name:"installation",
        message:"Describe installation process: "
    },
    {
        type:"input",
        name:"usage",
        message:"What is this project used for? "
    },
    {
        type:"list",
        name:"license",
        message:"Choose license used for project: ",
        choices: ['Apache license 2.0','BSD 2-clause "Simplified" license','Creative Commons Attribution 4.0','ISC', 'MIT', 'Microsoft Public License','Mozilla Public License 2.0', 'No license']
    },
    {
        type:"input",
        name:"contributers",
        message:"Has anybody contributed to the project? "
    },
    {
        type:"input",
        name:"tests",
        message:"What tests are included if any? "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    try{
        const responses = await inquirer.prompt(questions);
        const mark = generateMarkdown(responses)
        await writeFileAsync
    } catch(error){
        console.log(error);
    }}

// Function call to initialize app
init();
