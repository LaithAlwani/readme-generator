const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter a project title',
        name:'title'
    },
    {
        type: 'input',
        message: 'Please enter a project desctiption',
        name:'description'
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions',
        name:'installation'
    },
    {
        type: 'input',
        message: 'Please enter the usage information',
        name:'usage'
    },
    {
        type: 'input',
        message: 'Please enter the contribution guidelines',
        name:'contribution'
    },
    {
        type: 'input',
        message: 'Please enter test instructions',
        name:'test'
    },
    {
        type: 'list',
        message: 'Please choose a license for the project',
        choices: ['MIT', 'lis1','lis2','lis3'],
        name:'license'
    },
    {
        type: 'input',
        message: 'Please enter a github username',
        name:'github'
    },
    {
        type: 'email',
        message: 'Please enter an email address',
        name:'email'
    },
]).then(response =>{
    console.log(response);
    fs.writeFileSync('README.md',
`# ${response.title}               ${response.license}
## Table of Content:
1.[Description](#Description)
2.[Installation Instructions](#Installation-Instructions)
3.[Usage Information](#Usage-Information)
4.[Contribution Guidelines](#Contribution-Guidelines)
5.[Test Instructions:](#Test-Instructions)
6.[Questions](#Questions)

-------------------------------------------------
Description:
${response.description}
-------------------------------------------------
##Installation Instructions:
${response.installation}
-------------------------------------------------
##Usage Information:
${response.usage}
-------------------------------------------------
##Contribution Guidelines:
${response.contribution}
------------------------------------------------
##Test Instructions:
${response.test}
------------------------------------------------
##Questions:
[${response.github}]https://github.com/${response.github}
${response.email}
------------------------------------------------`

    , err=>{
        err ? console.log(err):"saved";
    });
});


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, 
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License 
// that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README