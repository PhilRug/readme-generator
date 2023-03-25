// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([  
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
    {
        type: 'list',
        message: 'What license did you use for your app?',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'None'],
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]).then(response => {
    console.log(response);
    writeToFile(response);
})

// TODO: Create a function to write README file
function writeToFile({project, description, install, usage, contributors, test, license, github, email}) {
    const readmeString = `# ${project}
    ${license}
    ## Description
    ${description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#test)
    - [Credits](#credits)
    
    ## Installation
    ${install}
    
    ## Usage
    ${usage}
    
    ## Testing
    ${test}

    ## Credits
    ${contributors}
    
    ## Questions
    If you have any questions you can contact me at:
    - Github https://github.com/${github}
    - Email ${email}
    `;


// TODO: Create a function to initialize app
fs.writeFile('test.md', readmeString, (err) => err ? console.error(error) : console.log("Success!"));
}