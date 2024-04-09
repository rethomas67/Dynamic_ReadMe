const licenses = [
  {
    name: "BSD 3 - Clause License",
    url: "https://opensource.org/licenses/BSD-3-Clause",
  },
  { name: "GNU GPL v3", url: "https://www.gnu.org/licenses/gpl-3.0" },
  { name: "MIT", url: "https://opensource.org/licenses/MIT" },
  { name: "None", url: "" },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

  return `# ${data.title} \n
  \n## Description
    \n### ${data.description} \n
    \n## Table of Contents
    \n### [Installation](#installation)
    \n### [Usage](#usage)
    \n### [License](#license)
    \n
    \n## Installation
    
    \n ${data.installation} \n
    \n## Usage
    \n ${data.usage} \n
    \n## License
    \n ${licenseText}
    

`;
}

module.exports = generateMarkdown;
