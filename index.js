const fs = require('fs');
const inquirer = require('inquirer');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');
const Circle = require('./lib/circle.js');



const CSS_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
const CSS_Hexcode_regex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');



inquirer
    .prompt([
        {// text is the input the user enters for what 1-3 letters are going to show up on the logo
            type: 'input',
            name: 'text',
            message: 'Please enter the text for your logo, you can enter up to 3 characters',
            validate: (input) => {//validate checks if the provided function returns true and if not allows the user to reattempt until it does
                if(input.length<=3) return true;//this validate simply checks if the input is less than 3 characters
                else return 'Your text was more than 3 characters, please enter only 3 characters';
            },
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter the color you want your logo to be in either a valid CSS color or in hexadecimal lead by a "#"',
            validate: (input) => {
                if(CSS_COLORS.includes(input)) return true;//this input succeeds if the user enters something that was a valid CSS color by checking against a list of all valid CSS colors
                else if(CSS_Hexcode_regex.test(input)) return true;// this input succeeds if the input is a valid hexadecimal input for a color
                else return 'Your input was not either a valid CSS color or a valid CSS color hexcode';
            },
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose the shape you would like your logo to be',
            choices: ['Circle', 'Triangle', 'Square'],//there is no validate for this input because there is simply no way for a user to enter something that isn't one of the choices
        }
    ])
    .then((data) => {
        //switch statement figures out which kind of new object to make, constructs it and writes the render function to file
        switch (data.shape) {
            case 'Circle':
                const circle = new Circle(data.text, data.color)
                console.log(circle.render());
                // fs.writeFile('logo.svg', circle.render(), (err) =>
                //     err ? console.error(err) : console.log('Generated logo.svg')
                // );
                break;

            case 'Triangle':
                const triangle = new Triangle(data.text, data.color)
                console.log(triangle.render());
                // fs.writeFile('logo.svg', circle.render(), (err) =>
                //     err ? console.error(err) : console.log('Generated logo.svg')
                // );
                break;

            case 'Square':
                const square = new Square(data.text, data.color)
                console.log(square.render());
                // fs.writeFile('logo.svg', circle.render(), (err) =>
                //     err ? console.error(err) : console.log('Generated logo.svg')
                // );
                break;

            default:
                break;
        }
    })
    .catch((err) => {
        console.error(err);
    })


