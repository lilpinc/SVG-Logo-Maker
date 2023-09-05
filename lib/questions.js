const questions = [
    {
        type: 'input',
        name: 'logo',
        message: 'What is your logo name? (Enter up to three characters)',
        default: 'SUP',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be no more than three characters.");
            }
            return true;
        }
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

module.exports = questions;