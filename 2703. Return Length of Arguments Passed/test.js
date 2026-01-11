const argumentsLength = require('./solution');

// Test case 1: args = [5]
const result1 = argumentsLength(5);
console.log('Test 1:', result1); // Expected: 1

// Test case 2: args = [{}, null, "3"]
const result2 = argumentsLength({}, null, "3");
console.log('Test 2:', result2); // Expected: 3