const { sub } = require('./function/sub.function');

const a = sub(9); // a should be 9
console.log(a);
const b = sub(9, 4); // b should be 5
console.log(b);
const c = sub(14, 2, 6); // c should be 6
console.log(c);
