const fs = require('fs');
const inquirer = require('inquirer');
const CSS_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
const CSS_Hexcode_regex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');

// if(CSS_COLORS.includes('aliceblue')) console.log('array checking works');
// if(CSS_Hexcode_regex.test('#7FFFD4')) console.log('regex checking works');

// let s = new Option().style;
// s.color = 'horseradish';
// console.log(s.color);
//
//Ask about this in office hours on Monday, don't know why "option" needs to be imported


inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: 'Please enter the text for your logo, you can enter up to 3 characters',
            validate: (input) => {
                if(input.length<=3) return true;
                else return 'Your text was more than 3 characters, please enter only 3 characters';
            },
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter the color you want your logo to be in either a valid CSS color or in hexadecimal lead by a "#"',
            validate: (input) => {
                if(CSS_COLORS.includes(input)) return true;
                else if(CSS_Hexcode_regex.test(input)) return true;
                else return 'Your input was not either a valid CSS color or a valid CSS color hexcode';
                // else return 'Your text was more than 3 characters, please enter only 3 characters';
            },
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose the shape you would like your logo to be',
            choices: ['Circle', 'Triangle', 'Square'],
        }
    ])
    .then((data) => {
        // console.log(`

        // You chose your logo text to be ${data.logoText},

        // You chose your logo color to be ${data.color},

        // And you chose your logo shape to be ${data.shape}`);
        generateSVG(data);
        console.log('Generated logo.svg');
    })
    .catch()

function generateSVG(data){
    const logoFileStart = `
    <!DOCTYPE html>
    <html>
    <body>
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    const logoFileEnd = `
        </svg>
    </body>
    </html>`
    let logoFileShape = '';
    switch (data.shape) {
        case "Circle":
            logoFileShape = `
            <circle cx="100" cy="100" r="100" fill="${data.color}" />
            <text x="65" y="110" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${data.logoText}</text>`
            break;

        case "Square":
            logoFileShape = `
                    <rect width="200" height="200" x="0" y="25" fill="${data.color}" />
                    <text x="50" y="130" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${data.logoText}</text>`
            break;

        case "Triangle":
            logoFileShape = `
            <polygon points="150,0 265.5,200 34.5,200" fill="${data.color}" />
            <text x="100" y="150" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${data.logoText}</text>`
            break;

        default:
            break;
    }
    const fileData = logoFileStart+logoFileShape+logoFileEnd;
    console.log(fileData);
    fs.writeFile('logo.svg', fileData, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

