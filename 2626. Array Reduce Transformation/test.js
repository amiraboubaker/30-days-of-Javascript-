const reduce = require('./solution');

// Test case 1: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr; }, init = 0
const result1 = reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0);
console.log('Test 1:', result1); // Expected: 10

// Test case 2: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr * curr; }, init = 100
const result2 = reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100);
console.log('Test 2:', result2); // Expected: 130

// Test case 3: nums = [], fn = function sum(accum, curr) { return 0; }, init = 25
const result3 = reduce([], function sum(accum, curr) { return 0; }, 25);
console.log('Test 3:', result3); // Expected: 25