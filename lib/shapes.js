// require question answers
class Shape {
    constructor(color){
        this.color = '';
    }
    setColor(colorChoice){
        this.color = colorChoice;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="50" cy="50" r="40" stroke="black" width="400px" height="400px" fill="${this.color}"/>`;
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50" y="20" width="400" height="400" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon height="400" width="400" points="200,10 300,190 100,190" fill="${this.color}"/>`;
    }
};

module.exports = {Circle, Square, Triangle};