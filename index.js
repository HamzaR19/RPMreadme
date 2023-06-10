// Inquirer 
const inquirer = require("inquirer");

//FS Module
const fs = require("fs");

// Write File Function
function writeToFile(fileName, data) {
  var fileText = "";
  fileText += `${data.name}'s README\n\n`;
  fileText += ` # ${data.title}\n\n`;
  fileText += `${generateLicense(data.license)}\n\n`;
  fileText += `## Table of Contents\n\n`;
  fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
  fileText += `## Description\n\n${data.description}\n\n`;
  fileText += `## Installation\n\n${data.installation}\n\n`;
  fileText += `## Usage Information\n\n${data.usage}\n\n`;
  fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
  fileText += `## Test Instructions\n\n${data.test}\n\n`;
  fileText += `## License\n\nNOTICE: This application is covered under the ${data.license}\n\n`;
  fileText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`;
  fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
  fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
  

// Fuction for Badges
function generateLicense(license) {
  // MIT License
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    // IBM Public License Version 1.0
  } else if (license === "IBM Public License Version 1.0") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    // Mozilla Public License 2.0
  } else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    // Unlicense
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}
  
 
// Init Function for Inquirer
function init() {
  inquirer
    .prompt([
      // User name input
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      // User README title input
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      // User README description input
      {
        type: "input",
        message: "Add the description of your project:",
        name: "description",
      },
      // User README installation instructions input
      {
        type: "input",
        message: "Add the installation instructions of your project:",
        name: "installation",
      },
      // User README usage information input
      {
        type: "input",
        message: "Add the usage information of your project:",
        name: "usage",
      },
      // User README contribution guidelines input
      {
        type: "input",
        message: "Add the contribution guidelines of your project:",
        name: "contribution",
      },
      // User README test instructions input
      {
        type: "input",
        message: "Add the test instructions of your project:",
        name: "test",
      },
 

 
      
            // README Options
            {
              type: "list",
              message: "Select the type of license you would like for your project:",
              choices: [
                "MIT",
                "Apache 2.0 License",
                "IBM Public License Version 1.0",
                "Mozilla Public License 2.0",
                "The Unlicense",
              ],
              name: "license",
            },
            // Github
            {
              type: "input",
              message: "What is your GitHub handle?",
              name: "github",
            },
            // Email
            {
              type: "input",
              message: "What is your email?",
              name: "email",
            },
          ])
          // Write File to readme
          .then((data) => {
            writeToFile("new-README.md", data);
          });
      }
      
      // Function call to initialize app
      init();
 
  

  
  
  
  
  
  