// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license != 'None') {
    badge = '[![License](https://img.shields.io/badge/License-' + license + '-blue.svg)]'
  } else if(license === 'MIT') {
    badge = '[![License](https://img.shields.io/badge/License-' + license + '-yellow.svg)]'
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if  (license != 'None') {
    licenseSection += '## License\n'
    licenseSection += 'Go to ' + renderLicenseLink(license) + 'to get more info';
  }
  return renderLicenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
