const licenses = [
  {
    name: "BSD 3 - Clause License",
    url: "https://opensource.org/licenses/BSD-3-Clause",
    badge: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
  },
  {
    name: "GNU GPL v3",
    url: "https://www.gnu.org/licenses/gpl-3.0",
    badge: "https://img.shields.io/badge/License-LGPL%20v3-blue.svg",
  },
  {
    name: "MIT",
    url: "https://opensource.org/licenses/MIT",
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
  },
  { name: "None", url: "", badge: "" },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var license = licenses.find((l) => l.name == license);
  var licenseBadge = "";

  if (license.name != "None") {
    licenseBadge = "[![License](" + license.badge + ")]";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseUrl = licenses.find((l) => l.name == license);
  var licenselink = "";

  if (licenseUrl.name != "None") {
    licenselink = "(" + licenseUrl.url + ")";
  }
  return licenselink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSelection = licenses.find((l) => l.name == license);

  var licenseText = "";
  var licenseCoverage = "This application is covered by ";
  if (licenseSelection.name != "None") {
    licenseText = licenseCoverage + "[" + licenseSelection.name + ".]";
  }
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  const licenseLink = renderLicenseLink(data.license);
  const licenseText = licenseSection + licenseLink;
  const licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title} 
  \n ${licenseBadge}\n
  \n## Description
    \n### ${data.description} \n
    \n## Table of Contents
    \n### [Installation](#installation)
    \n### [Usage](#usage)
    \n### [License](#license)
    \n
    \n## Installation
    \n### ${data.installation} \n
    \n## Usage
    \n### ${data.usage} \n
    \n## License
    \n### ${licenseText}
    

`;
}

module.exports = generateMarkdown;
