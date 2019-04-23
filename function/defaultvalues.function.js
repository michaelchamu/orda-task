const cfonts = require('cfonts');
const { sub } = require('./sub.function');
cfonts.say('EXECUTING DEFAULT CALCULATION', {
    font: 'shade', // define the font face
    align: 'center', // define text alignment
    colors: ['greenBright', 'white'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0' // define how many character can be on one line
});
const defaultexecution = () => {
    const promise = new Promise((resolve, reject) => {
        const a = sub(9); // a should be 9
        const b = sub(9, 4); // b should be 5
        const c = sub(14, 2, 6); // c should be 6
        cfonts.say(`The result of sub(9) is ${a}`, {
            font: 'console',
            align: 'center',
            colors: ['yellow']
        });
        cfonts.say(`The result of sub(9, 4) ${b}`, {
            font: 'console',
            align: 'center',
            colors: ['red']
        });
        cfonts.say(`The result of sub(14, 2, 6) ${c}`, {
            font: 'console',
            align: 'center',
            colors: ['cyan']
        });
        resolve();
    });
    return promise;
};

module.exports = { defaultexecution };
