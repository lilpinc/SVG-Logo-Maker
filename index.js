const inquirer = require('inquirer');
const fs = require('fs/promises');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const { Circle, Square, Triangle } = require('./lib/shapes.js');
const setShape = require('./lib/shapeChoice.js');


function makeLogo(answers) {

    let svgString = setShape(answers);
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log('Your logo has successfully been created!')

    });
    console.log('Your logo has successfully been created!');
}

function beginQuestions() {

    inquirer.prompt(questions)
        .then((answers) => {
            makeLogo(answers);
        })
        .catch(err => {
            console.log(err)
        });

};

beginQuestions();