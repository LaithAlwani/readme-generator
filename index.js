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
        name:'license',
        choices: [
            {
                name:'MIT License',
                value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                
            },
            {
                name:'Apache License 2.0',
                value:'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                
            },
            {
                name:'GNU General Public License v3.0',
                value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            },
            
            {
                name:'GNU Affero General Public License v2.0',
                value:'[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
            },
            {
                name:'BSD 3-clause Revised license',
                value:'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            },
            {
                name:'Mozilla Public License 2.0',
                value:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            }
        ]
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
    fs.writeFileSync('generatedREADME.md',  //writing to readme file
`# ${response.title}           ${response.license} 

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