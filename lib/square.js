
class Square {
    constructor(text, color) {
      this._text = text;
      this._color = color;
    }
    set text(text){
        this._text = text;
    }
    set color(color){
        this._color = color;
    }
    get color(){
        return this._color;
    }
    get text(){
        return this._text;
    }
    render(){
        return `<!DOCTYPE html>
        <html>
        <body>
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" x="0" y="25" fill="${this._color}" />
                <text x="50" y="130" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${this._text}</text>
            </svg>
        </body>
        </html>
        `
    }
  }
module.exports = Square;

