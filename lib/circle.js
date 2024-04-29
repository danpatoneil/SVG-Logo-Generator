const Shape = require('./shape.js')
class Circle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    render(){
        //now that the data is validated on input the render function can run without any further validation.
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this._color}" />
            <text x="150" y="125" text-anchor="middle" font-size="80" fill="${this._textColor}">${this._text}</text>
        </svg>`
    }
  }
module.exports = Circle;
