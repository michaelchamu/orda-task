const _ = require('lodash');
const cfonts = require('cfonts');
const { sub } = require('./function/sub.function');
const { collectUserInput } = require('./function/inputs.function');
const { defaultexecution } = require('./function/defaultvalues.function');
const { headingStyle } = require('./configs/cfont.configs');

const main = async () => {
    cfonts.say('EXECUTING USER INPUTS FEATURE', headingStyle);
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
