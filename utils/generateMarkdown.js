// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseBadge = data.license;
  var licenseName = ' '
  if(licenseBadge === ''){
    licenseName = ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `License: ${data.license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${renderLicenseBadge(data)}

  ## Table of Contents:
    - [Description](#Description)
    - [Installation](#Installation) 
    - [Usage](#Usage)
    - [License](#License)
    - [Contributers](#Contributers)
    - [Tests](#Tests)
    - [Questions](#Questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data)}

  ## Contributers
  ${data.contributers}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

    Created by ${data.userName}
    - Email: ${data.email}
    - Link to GitHub: ${data.githubProfileLink}

`;
}

module.exports = generateMarkdown;
