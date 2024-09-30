// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [

      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Please give a brief description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "How will the user install your project?",
        name: "installation",
      },
      {
        type: "input",
        message: "How can a user utilize your project?",
        name: "usage",
      },
      {
        type: "list",
        message: "What license does your project have?",
        choices: ["MIT License", "GPLv2", "GPLv3", "LGPLv3", "Apache License 2.0", "Mozilla Public License 2.0"],
        name: "license",
      },
      {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "What kinds of tests can users run to check that this project is working correctly?",
        name: "tests",
      },
      {
        type: "input",
        message: "Please provide the link to your github profile:",
        name: "github",
      },
      {
        type: "input",
        message: "Please provide your email address:",
        name: "email",
      },
    // ])
  
// ;}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("README successfully generated.")
});
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answer => {
    const inputData= {
      title: answer.title,
      description: answer.description,
      installation: answer.installation,
      usage: answer.usage,
      license: answer.license,
      contributing: answer.contributing,
      tests: answer.tests,
      github: answer.github,
      email: answer.email,
    }

    const createReadMe= generateMarkdown(inputData);
    const fileName= `${inputData.title}.md`;
    writeToFile(fileName, createReadMe);
  })


    }

// Function call to initialize app
init();
