const once = require('./solution');

// Test case 1: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
const onceFn1 = once((a, b, c) => a + b + c);
console.log('Test 1 - Call 1:', onceFn1(1, 2, 3)); // Expected: 6
console.log('Test 1 - Call 2:', onceFn1(2, 3, 6)); // Expected: undefined

// Test case 2: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
const onceFn2 = once((a, b, c) => a * b * c);
console.log('Test 2 - Call 1:', onceFn2(5, 7, 4)); // Expected: 140
console.log('Test 2 - Call 2:', onceFn2(2, 3, 6)); // Expected: undefined
console.log('Test 2 - Call 3:', onceFn2(4, 6, 8)); // Expected: undefined