const fs = require('fs');
const inquirer = require('inquirer');
const CSS_COLORS = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
const CSS_Hexcode_regex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$');

//inquirer runs on program launch
inquirer
    .prompt([
        {// logoText is the input the user enters for what 1-3 letters are going to show up on the logo
            type: 'input',
            name: 'logoText',
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
        //generateSVG is a function that generates and writes to file a valid SVG file based on user input.
        generateSVG(data);
    })
    .catch((err) => {
        console.error(err);
    })

function generateSVG(data){
    //there is no user input sanitization step here because the user input was already sanitized by the validate functions above
    const logoFileStart = `
    <!DOCTYPE html>
    <html>
    <body>
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        //because both the start and end of the SVG file are going to be the same, I stored them into template literals so I could concatenate them easily later
    const logoFileEnd = `
        </svg>
    </body>
    </html>`
    let logoFileShape = '';
    switch (data.shape) {//this uses a switch statement because there were multiple options all outputting the similar data
        case "Circle":
            logoFileShape = `
            <circle cx="100" cy="100" r="100" fill="${data.color}" />
            <text x="65" y="110" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${data.logoText}</text>`
            break;

        case "Square": //I wanted to simply put the data.shape into the start of the tag, but the tags aren't named the same as my inputs and the numbers change too much between options
            logoFileShape = `
                    <rect width="200" height="200" x="0" y="25" fill="${data.color}" />
                    <text x="50" y="130" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${data.logoText}</text>`
            break;

        case "Triangle":
            logoFileShape = `
            <polygon points="150,0 265.5,200 34.5,200" fill="${data.color}" />
            <text x="100" y="150" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">${data.logoText}</text>`
            break;// all the numbers on this are just adjusted manually, I didn't know of a more programmatic way of determining the correct positions for these

        default:
            break;
    }
    const fileData = logoFileStart+logoFileShape+logoFileEnd;//concatenate the 3 strings together, write them to file, and we're done here
    fs.writeFile('logo.svg', fileData, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );

}

