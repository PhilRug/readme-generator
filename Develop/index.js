// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps for installing the application?',
        name: 'install',
    },    
    {
        type: 'input',
        message: 'How do you use your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to your application?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What are the instructions for testing your app?',
        name: 'test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
