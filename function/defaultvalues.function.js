const cfonts = require('cfonts');
const { sub } = require('./sub.function');
const { headingStyle, logStyle } = require('../configs/cfont.configs');
cfonts.say('DEFAULT CALCULATION', headingStyle);
const defaultexecution = () => {
    const promise = new Promise((resolve, reject) => {
        const a = sub(9); // a should be 9
        const b = sub(9, 4); // b should be 5
        const c = sub(14, 2, 6); // c should be 6
        cfonts.say(`The result of sub(9) is ${a}`, {
            font: 'console',
            align: 'center',
            colors: ['yellow']
        });
        cfonts.say(`The result of sub(9, 4) ${b}`, logStyle);
        cfonts.say(`The result of sub(14, 2, 6) ${c}`, {
            font: 'console',
            align: 'center',
            colors: ['cyan']
        });
        resolve();
    });
    return promise;
};

module.exports = { defaultexecution };
