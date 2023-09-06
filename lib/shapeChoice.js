const {Circle, Square, Triangle} = require('./shapes.js');


function setShape (answers) {
    if (answers.shape === "triangle") {
      // create new version of triangle and put prompt answer outputs into svg of shapes.js, render.
      let shapeChoice = new Triangle(answers.shapecolor, answers.logo, answers.textcolor);
        return shapeChoice.render();
    }  
    // create new version of square and put answer outputs into svg of shapes.js, render.
    if (answers.shape === "square") {
     let shapeChoice = new Square(answers.shapecolor, answers.logo, answers.textcolor);
      return shapeChoice.render()
    }
    // create new version of circle and put answer outputs into svg of shapes.js, render.
    if (answers.shape === "circle") {
      let shapeChoice = new Circle(answers.shapecolor, answers.logo, answers.textcolor);
      return shapeChoice.render();
    }
};
// export setShape
module.exports = setShape;