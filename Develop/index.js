// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//const markdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? ",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter any installation instructions: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for the project: ",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to cover your application under? ",
    choices: ["BSD 3 - Clause License", "GNU GPL v3", "MIT", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownContent = generateMarkdown(data);
  console.log(markdownContent);
  fs.writeFile(fileName, markdownContent, function (err) {
    if (err) throw err;
    console.log(`Please review ${fileName}!`);
  });
}

// TODO: Create a function to initialize app
function init(questions) {
  console.log(questions);
  inquirer.prompt(questions).then((data) => {
    writeToFile("READMEExample.md", data);
  });
}

// Function call to initialize app
init(questions);
