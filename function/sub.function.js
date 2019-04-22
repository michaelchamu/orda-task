/*
sub function takes in dynamic aruguments and checks the number of arguments passed.
if one argument is passed, it returns that as the result.
if more than one argument is passed, it returns the final result after arguments at 
position 0+x are subtracted from the initial value in a loop. 
*/
const _ = require('lodash');
const sub = (...numbers) => {
    //check for empty parameters and if they exist return false
    if (_.isEmpty(numbers)) {
        return false;
    } else {
        //set the start value for easier/cleaner subtraction
        let total = numbers[0];
        //check if one parameter is passed
        if (numbers.length === 1) {
            return total;
        } else {
            //loop through each element in numbers object
            for (let i = 1; i < numbers.length; i++) {
                //check if number
                if (_.isNumber(numbers[i])) {
                    total -= numbers[i];
                } else {
                    return false;
                }
            }
            return total;
        }
    }
};

module.exports = { sub };
