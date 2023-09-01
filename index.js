const inquirer = require('inquirer');
const fs = require('fs/promises');
const {Circle, Square, Rectangle, Triangle} = require('lib/shapes.js');

// class Svg{
//     constructor(){
//         this.text = '';
//         this.shape = ''; 
//     }
// }

const questions = [
    {
        type: 'input',
        name: 'logo',
        message: 'What is your logo name? (Enter up to three characters)',
        default: 'SUP'
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like your text to be? (Enter a color or a hexadecimal number)',
        default: 'white'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'square', 'rectangle'],
        default: 'square'
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What color would you like your shape to be? (Enter a color or a hexadecimal number)',
        default: 'maroon',
    }
    
]

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile('logo.svg', )
    });
}