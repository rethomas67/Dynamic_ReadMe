// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//const markdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project? ",
  "Please enter a description for your project: ",
  "Please enter any installation instructions: ",
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
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
      },
    ])
    .then((data) => {
      writeToFile("READMEExample.md", data);
    });
}

// Function call to initialize app
init(questions);
