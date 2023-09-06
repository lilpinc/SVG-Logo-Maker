
class Shape {
    constructor(shapecolor, logo, textcolor ){
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
        this.logo = logo; 
    }
}
// create class for circle that renders the svg 
class Circle extends Shape{
    constructor(shapecolor, logo, textcolor) {
        super(shapecolor, logo, textcolor);
    };
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.shapecolor}"/><g><text text-anchor="middle" font-size="40" fill="${this.textcolor}">${this.logo}</text></g></svg>`;
    }
}
// create class for square that renders the svg with question answers
class Square extends Shape{
    constructor(shapecolor, logo, textcolor) {
        super(shapecolor, logo, textcolor);
    };
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${this.shapecolor}"/><g><text x="100" y="125" text-anchor="middle" font-size="40" fill="${this.textcolor}">${this.logo}</text></g></svg>`;
    }
}
// create class for Triangle that renders the svg 
class Triangle extends Shape{
    constructor(shapecolor, logo, textcolor) {
        super(shapecolor, logo, textcolor);
    };
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon  points="200,10 300,190 100,190" fill="${this.shapecolor}"/><g><text x="100" y="185" text-anchor="middle" font-size="60" fill="${this.textcolor}">${this.logo}</text></g></svg>`;
    }
};
// export all three shapes 
module.exports = {Circle, Square, Triangle};