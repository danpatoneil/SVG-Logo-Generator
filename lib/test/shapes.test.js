const Square = require('../square.js');
const Triangle = require('../triangle.js');
const Circle = require('../circle.js');
const Shape = require('../shape.js')
//testing the constructors and setters in the shape class because the other 3 classes extend those ones
describe('Shape', () => {
    describe('constructor', () => {
        it('should reject text inputs that are not strings', () => {
            const text = 0;
            const color = 'aquamarine';
            expect(() => new Shape(text, color)).toThrow('text must be a string');
        })
        it('should reject color inputs that are not strings', () => {
            const text = 'edx';
            const color = 600595;
            expect(() => new Shape(text, color)).toThrow('color must be a string');
        })
        it('should reject text inputs that are too long for text', () => {
            const text = 'wolf';
            const color = 'aquamarine';
            expect(() => new Shape(text, color)).toThrow('text must be at most 3 characters');
        })
        it('should reject text inputs that are too short for text', () => {
            const text = '';
            const color = 'aquamarine';
            expect(() => new Shape(text, color)).toThrow('text must be at least 1 character');
        })
        it('should reject color inputs that are not CSS colors or CSS hexcodes for color', () => {
            const text = 'ABC';
            const color = 'molcajete';
            expect(() => new Shape(text, color)).toThrow('color must be either a valid CSS color name or hexadecimal code');
        })
    })
    describe('setters', () => {
        it('should reject text inputs that are not strings', () => {
            const shape = new Shape('edX', '#22F');
            const text = 0;
            expect(() => shape.text=text).toThrow('text must be a string');
        })
        it('should reject color inputs that are not strings', () => {
            const shape = new Shape('edX', '#22F');
            const color = 0;
            expect(() => shape.color=color).toThrow('color must be a string');
        })
        it('should reject text inputs that are too long for text', () => {
            const shape = new Shape('edX', '#22F');
            const text = 'waterdog';
            expect(() => shape.text=text).toThrow('text must be at most 3 characters');
        })
        it('should reject text inputs that are too short for text', () => {
            const shape = new Shape('edX', '#22F');
            const text = '';
            expect(() => shape.text=text).toThrow('text must be at least 1 character');
        })
        it('should reject color inputs that are not CSS colors or CSS hexcodes for color', () => {
            const shape = new Shape('edX', '#22F')
            const color = 'molcajete';
            expect(() => shape.color=color).toThrow('color must be either a valid CSS color name or hexadecimal code');
        })
    })
})
//I am not running tests on the constructors for the shapes because they all inherit the Shape constructor unaltered
describe('Circle', () =>{
    describe('render',  () => {
        it('should return the SVG code for a circle of the color stored in the object and with the text stored in the object in the center', () =>{
            const shape = new Circle('edX', '#22F');
            const result = `<!DOCTYPE html>
        <html>
        <body>
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="#22F" />
                <text x="65" y="110" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">edX</text>
            </svg>
        </body>
        </html>`;
            expect(shape.render()).toBe(result);
        })
    })
})
describe('Triangle', () =>{
    describe('render',  () => {
        it('should return the SVG code for a triangle of the color stored in the object and with the text stored in the object in the center', () =>{
            const shape = new Triangle('edX', '#22F');
            const result = `<!DOCTYPE html>
        <html>
        <body>
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 265.5,200 34.5,200" fill="#22F" />
                <text x="100" y="150" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">edX</text>
            </svg>
        </body>
        </html>`;
            expect(shape.render()).toBe(result);
        })
    })
})
describe('Square', () =>{
    describe('render',  () => {
        it('should return the SVG code for a square of the color stored in the object and with the text stored in the object in the center', () =>{
            const shape = new Square('edX', '#22F');
            const result = `<!DOCTYPE html>
        <html>
        <body>
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" x="0" y="25" fill="#22F" />
                <text x="50" y="130" font-size="xxx-large" stroke="black" stroke-width="2" fill="white">edX</text>
            </svg>
        </body>
        </html>`;
            expect(shape.render()).toBe(result);
        })
    })
})

