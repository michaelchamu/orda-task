const cfonts = require('cfonts');
const { sub } = require('./sub.function');

const defaultexecution = () => {
    const promise = new Promise((resolve, reject) => {
        const a = sub(9); // a should be 9
        console.log(`The result of sub(9) is ${a}`);
        const b = sub(9, 4); // b should be 5
        console.log(`The result of sub(9, 4) ${b}`);
        const c = sub(14, 2, 6); // c should be 6
        console.log(`The result of sub(14, 2, 6) ${c}`);
        resolve();
    });
    return promise;
};

module.exports = { defaultexecution };
