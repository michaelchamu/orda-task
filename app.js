const _ = require('lodash');
const { sub } = require('./function/sub.function');
const { collectUserInput } = require('./function/inputs.function');
//default values returned from sub() function
const a = sub(9); // a should be 9
console.log(a);
const b = sub(9, 4); // b should be 5
console.log(b);
const c = sub(14, 2, 6); // c should be 6
console.log(c);

const main = async () => {
    const inputs = await collectUserInput();

    // for (let i = 0; i < inputs.length; i++) {
    //     let array = _.split(inputs[i].numbers, ',');
    //     let convertedArray = _.map(array, x => {
    //         return parseInt(x);
    //     });
    //     let result = sub(...convertedArray);
    //     console.log(
    //         `The result of sub() on ${inputs[i].numbers} is: ${result}`
    //     );
    // }

    for (elements of inputs) {
        console.log(elements.numbers);
        let array = _.split(elements.numbers, ',');
        let convertedArray = _.map(array, x => {
            return parseInt(x);
        });
        let result = sub(...convertedArray);
        console.log(`The result of sub() on ${elements.numbers} is: ${result}`);
    }
};

main();
