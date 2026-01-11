const map = require('./solution');

// Test case 1: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
const result1 = map([1, 2, 3], function plusone(n) { return n + 1; });
console.log('Test 1:', result1); // Expected: [2, 3, 4]

// Test case 2: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
const result2 = map([1, 2, 3], function plusI(n, i) { return n + i; });
console.log('Test 2:', result2); // Expected: [1, 3, 5]

// Test case 3: arr = [10,20,30], fn = function constant() { return 42; }
const result3 = map([10, 20, 30], function constant() { return 42; });
console.log('Test 3:', result3); // Expected: [42, 42, 42]