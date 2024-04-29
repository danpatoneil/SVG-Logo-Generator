const Shape = require('./shape.js')
class Triangle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    render(){
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 265.5,200 34.5,200" fill="${this._color}" />
            <text x="150" y="150" text-anchor="middle" font-size="60" fill="${this._textColor}">${this._text}</text>
        </svg>`
    }
  }
module.exports = Triangle;



