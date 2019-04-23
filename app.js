const _ = require('lodash');
const inquirer = require('inquirer');
const { sub } = require('./function/sub.function');

//default values returned from sub() function
const a = sub(9); // a should be 9
console.log(a);
const b = sub(9, 4); // b should be 5
console.log(b);
const c = sub(14, 2, 6); // c should be 6
console.log(c);
//start program
//prompt user for input
//send inpu to function
//print result
//ask user to continue

const collectInputs = async (inputs = []) => {
    const prompts = [
        {
            type: 'input',
            name: 'numbers',
            message:
                'Enter numbers separated by commas. You can enter a single number as well: '
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'Would you like to continue and add more number sets? ',
            default: true
        }
    ];

    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
    const inputs = await collectInputs();

    for (let i = 0; i < inputs.length; i++) {
        let array = _.split(inputs[i].numbers, ',');
        let convertedArray = _.map(array, x => {
            return parseInt(x);
        });
        let result = sub(...convertedArray);
        console.log(
            `The result of sub() on ${inputs[i].numbers} is: ${result}`
        );
    }
};

main();
