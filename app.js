const _ = require('lodash');
const { sub } = require('./function/sub.function');
const { collectUserInput } = require('./function/inputs.function');
const { defaultexecution } = require('./function/defaultvalues.function');
//default values returned from sub() function

const main = async () => {
    const inputs = await collectUserInput();
    for (elements of inputs) {
        let array = _.map(_.split(elements.numbers, ','), value => {
            return parseInt(value);
        });
        let result = sub(...array);
        console.log(
            `The result of sub() on ${elements.numbers} is: ${
                isNaN(result) ? 'Non numeric value detected' : result
            }`
        );
    }
};
//execute the default values then the main function that asks for user input
defaultexecution().then(() => {
    main();
});
