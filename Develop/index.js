// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
function renderLicenseBadge(license) {
    let badge = '';
    if(license != 'None') {
      badge = '[![License](https://img.shields.io/badge/License-' + license + '-blue.svg)'
    } else if(license === 'MIT') {
      badge = '[![License](https://img.shields.io/badge/License-' + license + '-yellow.svg)'
    }
    return badge;
  }

  function renderLicenseLink(license) {
    let licenseLink;
    switch(license) {
      case 'Apache 2.0':
        licenseLink = 'https://opensource.org/licenses/Apache-2.0'
        break;
      case 'MIT':
        licenseLink = 'https://opensource.org/licenses/MIT'
        break;
      case 'GPL 3.0':
        licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
        break;
      case 'BSD 3':
        licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
        break;
    }
    return licenseLink;
  }
  

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
        choices: ['Apache 2.0', 'MIT', 'GPL 3.0', 'BSD 3', 'None'],
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
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
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
`


// TODO: Create a function to initialize app
fs.writeFile('README.md', readmeString, generateMarkdown, (err) => err ? console.error(error) : console.log("Success!"));
}