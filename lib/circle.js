const Shape = require('./shape.js')
class Circle extends Shape {
    constructor(text, color) {
        super(text, color)
    }
    render(){
        //now that the data is validated on input the render function can run without any further validation.
        return `<!DOCTYPE html>
        <html>
        <body>
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="${this._color}" />
                <text x="65" y="110" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${this._text}</text>
            </svg>
        </body>
        </html>`
    }
  }
module.exports = Circle;
