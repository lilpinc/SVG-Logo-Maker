const inquirer = require('inquirer');
const fs = require('fs/promises');
const {Circle, Square, Triangle} = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'logo',
        message: 'What is your logo name? (Enter up to three characters)',
        default: 'SUP'
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'What color would you like your text to be? (Enter a color or a hexadecimal number)',
        default: 'white'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'square', 'triangle'],
        default: 'square'
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'What color would you like your shape to be? (Enter a color or a hexadecimal number)',
        default: 'maroon',
    }
    
]
function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "triangle") {
      shapeChoice = new Triangle();
      svgString += `<polygon height="600" width="600" points="200,10 300,190 100,190" fill="${answers.shapecolor}"/>`;
     
    } else if (answers.shape === "square") {
      shapeChoice = new Square();
      svgString += `<rect x="50" y="20" width="600" height="600" fill="${answers.shapecolor}"/>`;
    } else {
      shapeChoice = new Circle();
      svgString += `<circle cx="50" cy="50" r="100" stroke="black" width="600" height="600" fill="${answers.shapecolor}"/>`;
    }

    svgString += `<text text-anchor="middle" font-size="40" fill="${answers.textcolor}">${answers.logo}</text></g></svg>`;

  
    fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log('Your logo has successfully been created!');

});
}

function beginQuestions() {

    inquirer.prompt(questions)
    .then ((answers) => {
        if (answers.logo.length > 3) {
            console.log("Logo must be no more than 3 characters");
            beginQuestions();
        } else {
            writeToFile("logo.svg", answers);
            console.log('Your logo has successfully been created!')
        }
    });
   
    };
beginQuestions();