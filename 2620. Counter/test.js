const createCounter = require('./solution');

// Test case 1: n = 10, calls = 3
const counter1 = createCounter(10);
console.log('Test 1:');
console.log(counter1()); // Expected: 10
console.log(counter1()); // Expected: 11
console.log(counter1()); // Expected: 12

// Test case 2: n = -2, calls = 5
const counter2 = createCounter(-2);
console.log('Test 2:');
console.log(counter2()); // Expected: -2
console.log(counter2()); // Expected: -1
console.log(counter2()); // Expected: 0
console.log(counter2()); // Expected: 1
console.log(counter2()); // Expected: 2