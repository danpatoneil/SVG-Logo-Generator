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
            const textColor = 'red';
            expect(() => new Shape(text, textColor, color)).toThrow('text must be a string');
        })
        it('should reject shape color inputs that are not strings', () => {
            const text = 'edx';
            const color = 600595;
            const textColor = 'red';
            expect(() => new Shape(text, textColor, color)).toThrow('color must be a string');
        })
        it('should reject text color inputs that are not strings', () => {
            const text = 'edx';
            const color = 'red';
            const textColor = 600595;
            expect(() => new Shape(text, textColor, color)).toThrow('color must be a string');
        })
        it('should reject text inputs that are too long for text', () => {
            const text = 'wolf';
            const color = 'aquamarine';
            const textColor = 'red';
            expect(() => new Shape(text, textColor, color)).toThrow('text must be at most 3 characters');
        })
        it('should reject text inputs that are too short for text', () => {
            const text = '';
            const color = 'aquamarine';
            const textColor = 'red';
            expect(() => new Shape(text, textColor, color)).toThrow('text must be at least 1 character');
        })
        it('should reject shape color inputs that are not CSS colors or CSS hexcodes for color', () => {
            const text = 'ABC';
            const color = 'molcajete';
            const textColor = 'red';
            expect(() => new Shape(text, textColor, color)).toThrow('color must be either a valid CSS color name or hexadecimal code');
        })
        it('should reject text color inputs that are not CSS colors or CSS hexcodes for color', () => {
            const text = 'ABC';
            const color = 'red';
            const textColor = 'molcajete';
            expect(() => new Shape(text, textColor, color)).toThrow('color must be either a valid CSS color name or hexadecimal code');
        })
    })
    describe('setters', () => {
        const shape = new Shape('edX', '#888', '#22F');
        it('should reject text inputs that are not strings', () => {
            const text = 0;
            expect(() => shape.text=text).toThrow('text must be a string');
        })
        it('should reject color inputs that are not strings', () => {
            const color = 0;
            expect(() => shape.color=color).toThrow('color must be a string');
        })
        it('should reject text inputs that are too long for text', () => {
            const text = 'waterdog';
            expect(() => shape.text=text).toThrow('text must be at most 3 characters');
        })
        it('should reject text inputs that are too short for text', () => {
            const text = '';
            expect(() => shape.text=text).toThrow('text must be at least 1 character');
        })
        it('should reject color inputs that are not CSS colors or CSS hexcodes for color', () => {
            const color = 'molcajete';
            expect(() => shape.color=color).toThrow('color must be either a valid CSS color name or hexadecimal code');
        })
    })
})
//I am not running tests on the constructors for the shapes because they all inherit the Shape constructor unaltered
describe('Circle', () =>{
    describe('The render method for the circle class',  () => {
        it('should return the SVG code for a circle of the color stored in the object and with the text with the correct color stored in the object in the center', () =>{
            const shape = new Circle('edX', '#888', '#22F');
            const result = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="#22F" />
            <text x="150" y="125" text-anchor="middle" font-size="80" fill="#888">edX</text>
        </svg>`;
            expect(shape.render()).toBe(result);
        })
    })
})
describe('Triangle', () =>{
    describe('The render method for the triangle class',  () => {//fix these
        it('should return the SVG code for a triangle of the color stored in the object and with the text with the correct color stored in the object in the center', () =>{
            const shape = new Triangle('edX', '#888', '#22F');
            const result = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 265.5,200 34.5,200" fill="#22F" />
            <text x="150" y="150" text-anchor="middle" font-size="60" fill="#888">edX</text>
        </svg>`;
            expect(shape.render()).toBe(result);
        })
    })
})
describe('Square', () =>{
    describe('The render method for the square class',  () => {
        it('should return the SVG code for a square of the color stored in the object and with the text with the correct color stored in the object in the center', () =>{
            const shape = new Square('edX', '#888', '#22F');
            const result = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" x="0" y="0" fill="#22F" />
            <text x="100" y="125" text-anchor="middle" font-size="80" fill="#888">edX</text>
        </svg>`;
            expect(shape.render()).toBe(result);
        })
    })
})

