const _ = require('lodash');
const { sub } = require('./function/sub.function');
const { collectUserInput } = require('./function/inputs.function');
//default values returned from sub() function
const a = sub(9); // a should be 9
console.log(`The result of sub(9) is ${a}`);
const b = sub(9, 4); // b should be 5
console.log(`The result of sub(9, 4) ${b}`);
const c = sub(14, 2, 6); // c should be 6
console.log(`The result of sub(14, 2, 6) ${c}`);
const main = async () => {
    const inputs = await collectUserInput();
    for (elements of inputs) {
        let array = _.map(_.split(elements.numbers, ','), value => {
            return parseInt(value);
        });
        let result = sub(...array);
        console.log(`The result of sub() on ${elements.numbers} is: ${result}`);
    }
};

main();
