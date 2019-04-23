const _ = require('lodash');
const cfonts = require('cfonts');
const { sub } = require('./function/sub.function');
const { collectUserInput } = require('./function/inputs.function');
const { defaultexecution } = require('./function/defaultvalues.function');

const main = async () => {
    cfonts.say('EXECUTING USER INPUTS FEATURE', {
        font: 'shade', // define the font face
        align: 'center', // define text alignment
        colors: ['greenBright', 'white'], // define all colors
        background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1, // define letter spacing
        lineHeight: 1, // define the line height
        space: true, // define if the output text should have empty lines on top and on the bottom
        maxLength: '0' // define how many character can be on one line
    });
    const inputs = await collectUserInput();
    for (elements of inputs) {
        let array = _.map(_.split(elements.numbers, ','), value => {
            return parseInt(value);
        });
        let result = sub(...array);
        cfonts.say(
            `The result of sub() on ${elements.numbers} is: ${
                isNaN(result) ? 'Non numeric value detected' : result
            }`,
            {
                font: 'console',
                align: 'center',
                colors: ['red']
            }
        );
        console.log();
    }
};
//execute the default values then the main function that asks for user input
defaultexecution().then(() => {
    main();
});
