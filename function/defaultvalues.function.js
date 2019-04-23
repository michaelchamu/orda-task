const cfonts = require('cfonts');
const { sub } = require('./sub.function');
const { headingStyle, red, yellow, cyan } = require('../configs/cfont.configs');
cfonts.say('DEFAULT CALCULATION', headingStyle);
const defaultexecution = () => {
    const promise = new Promise((resolve, reject) => {
        const a = sub(9); // a should be 9
        const b = sub(9, 4); // b should be 5
        const c = sub(14, 2, 6); // c should be 6
        cfonts.say(`The result of sub(9) is ${a}`, yellow);
        cfonts.say(`The result of sub(9, 4) ${b}`, red);
        cfonts.say(`The result of sub(14, 2, 6) ${c}`, cyan);
        resolve();
    });
    return promise;
};

module.exports = { defaultexecution };
