const timeLimit = require('./solution');

// Test case 1: Function resolves before timeout
console.log('Test 1: Function resolves quickly');
const fn1 = (x) => new Promise(resolve => setTimeout(() => resolve(x * 2), 50));
const limitedFn1 = timeLimit(fn1, 100);

limitedFn1(5).then(result => {
    console.log('Result:', result); // Expected: 10
    console.log(result === 10 ? 'PASS' : 'FAIL');
}).catch(err => {
    console.log('Unexpected error:', err);
    console.log('FAIL');
});

// Test case 2: Function times out
console.log('Test 2: Function times out');
const fn2 = (x) => new Promise(resolve => setTimeout(() => resolve(x), 200));
const limitedFn2 = timeLimit(fn2, 100);

limitedFn2(5).then(result => {
    console.log('Unexpected result:', result);
    console.log('FAIL');
}).catch(err => {
    console.log('Error:', err); // Expected: Time Limit Exceeded
    console.log(err === 'Time Limit Exceeded' ? 'PASS' : 'FAIL');
});

// Test case 3: Function rejects before timeout
console.log('Test 3: Function rejects quickly');
const fn3 = (x) => new Promise((_, reject) => setTimeout(() => reject('Custom error'), 50));
const limitedFn3 = timeLimit(fn3, 100);

limitedFn3(5).then(result => {
    console.log('Unexpected result:', result);
    console.log('FAIL');
}).catch(err => {
    console.log('Error:', err); // Expected: Custom error
    console.log(err === 'Custom error' ? 'PASS' : 'FAIL');
});