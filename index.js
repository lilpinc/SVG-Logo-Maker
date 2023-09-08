// pull in all other files
const inquirer = require('inquirer');
const fs = require('fs/promises');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const { Circle, Square, Triangle } = require('./lib/shapes.js');
const setShape = require('./lib/shapeChoice.js');


function makeLogo(answers) {
// set svgString to set shape function with answers.
    let svgString = setShape(answers);
    // write file with svgstring and filename.
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg')

    });
    console.log('Generated logo.svg');
}

function beginQuestions() {
// start up prompt questions with inquirer
    inquirer.prompt(questions)
        .then((answers) => {
            // send answers to makeLogo function or catch the error and conosle.log error
            makeLogo(answers);
        })
        .catch(err => {
            console.log(err)
        });

};
// initiate prompt questions
beginQuestions();