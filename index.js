const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');


inquirer
  .prompt([
    {
        type: 'input',
        message: 'Project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Discription of project?',
        name: 'discription'
    },
    {
      type: 'input',
      message: 'What is your LinkedIn',
      name: 'linkedIn'
  },
  {
      type: 'input',
      message: 'Type your installation instructions?',
      name: 'installation'
  },
  {
      type: 'input',
      message: 'what is your email?',
      name: 'email'
  },
  {
      type: 'input',
      message: 'what is your GitHub URL?',
      name: 'github'
  },
  {
    type: 'input',
    message: 'Who contributed?',
    name: 'contributing'
},
{
    type: 'input',
    message: 'Any tests to add?',
    name: 'tests'
},
{
    type: 'input',
    message: 'past a URL for a cover photo or file path for local photo:',
    name: 'coverImg'
},
{
    type: 'input',
    message: 'past a Video URL or photo URL for an instruction video:',
    name: 'instructVideo'
},
{
    type: 'input',
    message: 'Questions?',
    name: 'questions'
},
{
    type: 'list',
    message: 'Please select a license if neccessary. This will appear as a badge!',
    choices: ['[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)', '[![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', '[![GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', '[![Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', '[![Eclipse 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', '[![IBM- IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)', '[![Open Database ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)', '[![Do what u want WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)', '[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![Mozilla MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'],
    name: 'license'
}  
])
.then((response)=>{
    const {title, discription, installation, email, github, contributing, tests, questions, linkedIn, license, coverImg, instructVideo} = response;

    const readMeOutput = `
# ${title}

## License
## ${license}
&nbsp;

&nbsp;
## Discription
#### ${discription}
&nbsp;

&nbsp;
## Table of contents
* [Installation](#Installation)
* [Contributers](#Contributers)
* [Tests](#Tests)
* [Questions](#Questions)
&nbsp;

![cover photo of readMe](${coverImg})

&nbsp;
## Installation
#### ${installation}
&nbsp;
![Demo video for install](${instructVideo})
&nbsp;



&nbsp;
## Contributors
### ${contributing}
&nbsp;


&nbsp;
## Tests
### ${tests}
&nbsp;



&nbsp;
## Questions
#### ${questions}
### [GitHub](${github})
### [${email}](${email})
### [LinkedIn](${linkedIn})
`

    console.log(response)

    fs.writeFile(`${title}.md`, readMeOutput, (err)=>{
        if (err){
            throw err;
        }
        console.log("ReadMe all finished!!")
    })
})