class Triangle {
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
                <polygon points="150,0 265.5,200 34.5,200" fill="${this._color}" />
                <text x="100" y="150" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${this._text}</text>
            </svg>
        </body>
        </html>
        `
    }
  }
module.exports = Triangle;



