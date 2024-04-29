# Dynamic_ReadMe

## Description

Create a professional README.MD file. The Inquirer package is used to prompt the user to enter the title of the project and information to the sections labeled Description, Installation, Usage, License, Contributing, Tests, and Questions. A class generateMarkdown is used to generate the user input into a professional markdown file. The file system package is used to create and write to the markdown file. For the selected license the application has an array obect with the name, URL, and the badge URL. The Inquirer data is sent to the generateMarkdown function. First a message of this license is covered by (license) followed by th url is rendered. Then the license badge is rendered.
Then a check for email and/or github links is checked. Then, the markdown is create with the data passed in from the user. The rendered license badge is at the top of the file, if a license was selected. Then, the title is added to the title section. The Table of Contents section generation follows with lists and links to Installation, Usage, Contributions, and Questions sections. The Installation, Usage, License, if selected, is created with the rendered license text, Contributions,
Tests, and Questions markdown are populated with the users data. The Questions section adds the uesers GitHub and email, if the user entered the data.

## Installation

N/A

## Usage

The user is presented with a set of prompts from the Inquirer Package to populate sections for a Professional README.md file. When the user enters a title, it is presented as a title for the readme.
The user enters information to be populated to the corresponding sections of Description, Installation, Usage, Contributing, and Tests. When the user selects a badge, then the badge is created toward the top of the readme and a license message is presented in the license section.
When the user enters a GitHub user it is added to the Questions section. When the user enters an Email the email is added to the Questions section. The Table of Contents links takes the user to the corresponding section, when clicked.

Screencastify link:
https://drive.google.com/file/d/1Bei9xQiQAy5OuaZZo2FLXIuYyOUzkLTc/view

The link to the GitHub repository is:
https://github.com/rethomas67/Dynamic_ReadMe/tree/main/Develop

## Credits

N/A

## License

N/A
