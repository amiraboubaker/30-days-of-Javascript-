const filter = require('./solution');

// Test case 1: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
const result1 = filter([0, 10, 20, 30], function greaterThan10(n) { return n > 10; });
console.log('Test 1:', result1); // Expected: [20, 30]

// Test case 2: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
const result2 = filter([1, 2, 3], function firstIndex(n, i) { return i === 0; });
console.log('Test 2:', result2); // Expected: [1]

// Test case 3: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
const result3 = filter([-2, -1, 0, 1, 2], function plusOne(n) { return n + 1; });
console.log('Test 3:', result3); // Expected: [-2, 0, 1, 2]