const inquirer = require('inquirer');
const fs = require('fs');
const SVGGenerator = require('../index.js')
const svg = new SVGGenerator();

const mockAnswers = {
    logoText:'EdX',
    color:'Blue',
    shape:'Triangle'
}
jest.mock('inquirer');
jest.mock('fs');

describe('generateSVG', () => {
    it('should generate an SVG file', async () => {
        inquirer.prompt.mockResolvedValueOnce(mockAnswers);
        
    })
})

