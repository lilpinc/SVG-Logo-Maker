// pull in shapes js for test
const {Circle, Square, Triangle} = require('./shapes.js');
// check triangle
describe("Triangle test", () => {
    test("test for a red triangle", () => {
      const triangle = new Triangle('red','EXP', 'white' );
      expect(triangle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon  points="200,10 300,190 100,190" fill="red"/><g><text x="200" y="165" text-anchor="middle" font-size="50" fill="white">EXP</text></g></svg>`
      );
    });
  });
  // check square
  describe("Square test", () => {
    test("test for a green square", () => {
      const square = new Square('#81de76', 'EXP', 'yellow');
      expect(square.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#81de76"/><g><text x="100" y="125" text-anchor="middle" font-size="60" fill="yellow">EXP</text></g></svg>`
      );
    });
  });
  
// check circle
  describe("Circle test", () => {
    test("test for a green circle", () => {
      const circle = new Circle('green', 'EXP', 'black');
      expect(circle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="green"/><g><text x="150" y="115" text-anchor="middle" font-size="60" fill="black">EXP</text></g></svg>`
      );
    });
  });