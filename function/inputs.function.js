const inquirer = require('inquirer');
const collectUserInput = async (inputs = []) => {
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
    return again ? collectUserInput(newInputs) : newInputs;
};

module.exports = { collectUserInput };
