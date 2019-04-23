const _ = require('lodash');
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
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt(
    'Enter number. You can enter multiple numbers separated by a comma. >'
);
rl.prompt();
rl.on('line', line => {
    //obtain values input by user and create an array object using split
    //after this operation, the values will be be separated
    let input = _.split(line, ',');
    //always convert to integers before passing to sub function
    let integers = input.map(value => parseInt(value));
    //once you have a set of integers in an array, pass the array as a parameter
    //use the rest
    let x = sub(...integers);
    console.log('Result from function: ' + x);
});
