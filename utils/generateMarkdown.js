// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseBadge = data.license;
  var licenseName = ' '
  if(licenseBadge === 'Apache license 2.0'){
    licenseName = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if(licenseBadge === 'BSD 2-clause License'){
    licenseName = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  };
  if(licenseBadge === `ISC`){
    licenseName = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  };
  if(licenseBadge === `MIT`){
    licenseName = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if(licenseBadge === 'Mozilla Public License 2.0'){
    licenseName = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  };
  if(licenseBadge === 'Mozilla Public License 2.0'){
    licenseName = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  };

  return licenseName
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const LicenseLink = data.license;
  var linkText = ' ';
  if(LicenseLink === 'Apache license 2.0'){
    linkText = `https://opensource.org/licenses/Apache-2.0`
  };
  if(LicenseLink === 'BSD 2-clause License'){
    linkText = `https://opensource.org/licenses/BSD-2-Clause`
  };
  if(LicenseLink === `ISC`){
    linkText = `https://opensource.org/licenses/ISC`
  };
  if(LicenseLink === `MIT`){
    linkText = `https://opensource.org/licenses/MIT`
  };
  if(LicenseLink === 'Mozilla Public License 2.0'){
    linkText = `https://opensource.org/licenses/MPL-2.0`
  };

  return linkText
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return `License: ${data.license}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data)}

  ## Table of Contents:
  1. [Description](#Description)
  2. [Installation](#Installation) 
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributers](#Contributers)
  6. [Tests](#Tests)
  7. [Questions](#Questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data)} <br />
  Link: ${renderLicenseLink(data)}

  ## Contributers
  ${data.contributers}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  <br />
  <br />
  Created by ${data.userName} <br />
  <br />
  Have any questions? Feel free to email me at ${data.email} <br />
  Link to GitHub: ${data.githubProfileLink}

`;
}

module.exports = generateMarkdown;
