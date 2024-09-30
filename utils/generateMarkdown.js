// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return "";
  }
  else {
    switch(license){
      case "MIT License":
        return `![${license}](https://img.shields.io/badge/License-MIT_License-green)`;
      case "GPLv2":
        return `![${license}](https://img.shields.io/badge/License-GPL_v2-green)`;
      case "GPLv3":
        return `![${license}](https://img.shields.io/badge/License-GPL_v3-green)`;
      case "LGPLv3":
        return `![${license}](https://img.shields.io/badge/License-LGPL_v3-green)`;
      case "Apache License 2.0":
        return `![${license}](https://img.shields.io/badge/License-Apache_v2-green)`;
      case "Mozilla Public License 2.0":
        return `![${license}](https://img.shields.io/badge/License-Mozilla_v2-green)`;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return "";
  }
  else {
    switch(license){
      case "MIT License":
        return `https://choosealicense.com/licenses/mit/`;
      case "GPLv2":
        return `https://choosealicense.com/licenses/gpl-2.0/`;
      case "GPLv3":
        return `https://choosealicense.com/licenses/gpl-3.0/`;
      case "LGPLv3":
        return `https://choosealicense.com/licenses/lgpl-3.0/`;
      case "Apache License 2.0":
        return `https://choosealicense.com/licenses/apache-2.0/`;
      case "Mozilla Public License 2.0":
        return `https://choosealicense.com/licenses/mpl-2.0/`;

    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){return ""};
  {
    return `This project utilizes a/an ${license}.
    For more details please go to: [${renderLicenseLink(license)}](${renderLicenseLink(license)})`};
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

 ${renderLicenseBadge(data.license)}

  ## Description

 ${data.description}

 ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

 ## Installation

 ${data.installation}

 ## Usage

 ${data.usage}

 ## License

 ${renderLicenseSection(data.license)} 

 ## Contributing

 ${data.contributing}

 ## Tests

 ${data.tests}

 ## Questions

 Please contact the following with any questions you may have:
 - GitHub: ${data.github}
 - Email: ${data.email}`;
}

export default generateMarkdown;
