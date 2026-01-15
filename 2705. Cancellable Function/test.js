const cancellable = require('./solution');

// Test case 1: Function is called after delay
console.log('Test 1: Function should be called after 20ms');
let result1 = [];
const fn1 = (x) => {
    result1.push({ time: Date.now() % 1000, returned: x * 5 });
};
const cancelFn1 = cancellable(fn1, [2], 20);
setTimeout(() => {
    console.log('Result 1:', result1);
}, 50);

// Test case 2: Function is cancelled before delay
console.log('Test 2: Function should be cancelled');
let result2 = [];
const fn2 = (x) => {
    result2.push({ time: Date.now() % 1000, returned: x ** 2 });
};
const cancelFn2 = cancellable(fn2, [2], 100);
setTimeout(cancelFn2, 50);
setTimeout(() => {
    console.log('Result 2:', result2);
}, 150);

// Test case 3: Cancel after execution
console.log('Test 3: Cancel after execution');
let result3 = [];
const fn3 = (x1, x2) => {
    result3.push({ time: Date.now() % 1000, returned: x1 * x2 });
};
const cancelFn3 = cancellable(fn3, [2, 4], 30);
setTimeout(cancelFn3, 100);
setTimeout(() => {
    console.log('Result 3:', result3);
}, 150);