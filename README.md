# Pro-ReadMe-Generator
LINK: 
https://github.com/sonnytedesco26/Pro-ReadMe-Generator/

For this project, the goal was to create a nodeJS terminal application that would generate a README, set with the following sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. Inquirer and fs NPM installations were required for the readme to be generated.

## Creation process / Packages required

Inquirer, and FS are required for the Index.js to function. Package and package-lock jsons are required for the inquirer package to work. If haven't done already, run (from the main directory in the command line) npm install inquirer

This was the first project where the reference of these packages was done in such a way. Also the fact that it is a command line application made the testing process slightly different. Questions were written up so that all of the necessary fields would be populated in the generated README file, titled newREADME.md. Initially, the init function was giving me some issues, leaving everything generated in the new readme as undefined. It was then discovered that when adding an await and making init asynchronous, the user input would not just be defaulted to undefined instantly. The license and badge creation is limited to the licenses from the list of answers available to choose from in the program.

## Use 

The user gets prompted several questions, all of which will have their answers put into the generated readme. The repo comes with an example readme, which shows the user the layout of the readme. To run, go to the main directory of the repo from the command line and enter: node index.js
