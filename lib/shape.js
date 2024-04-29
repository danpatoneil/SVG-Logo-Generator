class Shape{
    constructor(text, textColor, color) {
      this.CSS_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
      this.CSS_Hexcode_regex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');
      this.specialCharRegex = /\W/;
      //these two constants are for checking that color input is valid
      if(typeof text != 'string') throw new Error('text must be a string');
      if(text.length<1) throw new Error('text must be at least 1 character');
      if(text.length>3) throw new Error('text must be at most 3 characters');
      if(this.specialCharRegex.test(text))  throw new Error('text must not contain any special characters');
      this._text = text;//this is data validation that the text is a string of the correct length

      if(typeof color != 'string') throw new Error('shape color must be a string');
      if(this.CSS_COLORS.includes(color)||this.CSS_Hexcode_regex.test(color))this._color = color;
      else throw new Error('shape color must be either a valid CSS color name or hexadecimal code')

      if(typeof textColor != 'string') throw new Error('text color must be a string');
      if(this.CSS_COLORS.includes(textColor)||this.CSS_Hexcode_regex.test(textColor))this._textColor = textColor;
      else throw new Error('text color must be either a valid CSS color name or hexadecimal code')
      //sets if the input is something that was a valid CSS color by checking against a list of all valid CSS colors or if it is a valid CSS hexadecimal
    }
    set text(text){
      if(typeof text != 'string') throw new Error('text must be a string');
      if(text.length<1) throw new Error('text must be at least 1 character');
      if(text.length>3) throw new Error('text must be at most 3 characters');
      if(this.specialCharRegex.test(text))  throw new Error('text must not contain any special characters');
      this._text = text;//same data validation as in the constructor
    }
    set color(color){
        if(typeof color != 'string') throw new Error('color must be a string');
        if(this.CSS_COLORS.includes(color)||this.CSS_Hexcode_regex.test(color))this._color = color;
        else throw new Error('color must be either a valid CSS color name or hexadecimal code')//same data validation as in the constructor
    }
    set textColor(color){
        if(typeof color != 'string') throw new Error('color must be a string');
        if(this.CSS_COLORS.includes(color)||this.CSS_Hexcode_regex.test(color))this._textColor = color;
        else throw new Error('color must be either a valid CSS color name or hexadecimal code')//same data validation as in the constructor
    }
    get color(){
        return this._color;
    }
    get textColor(){
        return this._textColor;
    }
    get text(){
        return this._text;
    }
}
module.exports = Shape;
