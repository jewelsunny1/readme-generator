// TODO: Create a function that returns a license badge based on which license is passed in
//what are these license badges?The badges do not fully replace the license informations for your projects, they are only emblems for the README, that the user can see the License at first glance.
//more info on badges can be found in this link: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return''
  
  }
  else{ //returns a markdown badge with the license type
    return`[![License:${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ''
  }
  else{//typical link to licenses to open source projects
    return `https://opensource.org/licenses/${license}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ''
  }
  else{//states application is licensed under a specific type of license, with clickable link that takes user to the selected license page to read more about it
    return `This application is licensed under [${license}](${renderLicenseLink(license)}) license.`;
    //render license link in this creates a clickable link when user lick on the specified license type they chose.
  }
}

// TODO: Create a function to generate markdown for README
//.title, .description, .installation...etc seen under generateMarkdown fucntion we are accessing the value given to the key 'names' we put in index.js (of the question object).
//in this **data** is referring to the answers/reaponse given by the users!
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

 ${data.tests}

  `;
}

module.exports = generateMarkdown;
