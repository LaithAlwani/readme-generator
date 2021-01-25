const fs = require('fs');
const inquirer = require('inquirer');

//inquirer
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
        choices: ['Apache License 2.0','GNU General Public License','MIT License', 'BSD 2-clause Simplified license',
                'BSD 3-clause Revised license', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 
                'Eclipse Public License - v 2.0', 'GNU Affero General Public License v3.0','GNU General Public License v2.0', 
                'GNU Lesser General Public License v2.1', 'Mozilla Public License Version 2.0', 'Unlicensen'],
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
    fs.writeFileSync('README.md',  //writing to readme file
`# ${response.title} 

### ${response.license} 

## Table of Content:
1.[Description](#Description)\n
2.[Installation Instructions](#Installation-Instructions)\n
3.[Usage Information](#Usage-Information)\n
4.[Contribution Guidelines](#Contribution-Guidelines)\n
5.[Test Instructions:](#Test-Instructions)\n
6.[Questions](#Questions)\n

## Description:
    ${response.description}

## Installation Instructions:
    ${response.installation}

## Usage Information:
    ${response.usage}

## Contribution Guidelines:
    ${response.contribution}

## License:
    This application is covered under the ${response.license}.    

## Test Instructions:
    ${response.test}

## Questions:
Github: [${response.github}](https://github.com/${response.github})\n
${response.email}`
//chcking for errors
    , err=>{
        err ? console.log(err):"saved";
    });
});