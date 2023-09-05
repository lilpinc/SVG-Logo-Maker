const {Circle, Square, Triangle} = require('./shapes.js');

describe("Triangle test", () => {
    test("test for a red triangle", () => {
      const shape = new Triangle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<polygon height="600" width="600" points="200,10 300,190 100,190" fill="red"/>'
      );
    });
  });
  
  describe("Square test", () => {
    test("test for a green square", () => {
      const shape = new Square();
      shape.setColor("#81de76");
      expect(shape.render()).toEqual(
        '<rect x="50" y="20" width="600" height="600" fill="#81de76"/>'
      );
    });
  });
  

  describe("Circle test", () => {
    test("test for a blue circle", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<circle cx="50" cy="50" r="100" stroke="black" width="600" height="600" fill="blue"/>'
      );
    });
  });