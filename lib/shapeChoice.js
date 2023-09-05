const {Circle, Square, Triangle} = require('./shapes.js');


function setShape (answers) {
    if (answers.shape === "triangle") {
      let shapeChoice = new Triangle(answers.shapecolor, answers.logo, answers.textcolor);
        return shapeChoice.render();
    }  
    
    if (answers.shape === "square") {
     let shapeChoice = new Square(answers.shapecolor, answers.logo, answers.textcolor);
      return shapeChoice.render()
    }
    
    if (answers.shape === "circle") {
      let shapeChoice = new Circle(answers.shapecolor, answers.logo, answers.textcolor);
      return shapeChoice.render();
    }
};

module.exports = setShape;