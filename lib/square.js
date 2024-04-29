
const Shape = require('./shape.js')
class Square extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    render(){
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" x="0" y="0" fill="${this._color}" />
            <text x="100" y="125" text-anchor="middle" font-size="80" fill="${this._textColor}">${this._text}</text>
        </svg>`
    }
  }
module.exports = Square;

