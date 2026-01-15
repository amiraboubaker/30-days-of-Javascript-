const isEmpty = require('./solution');

// Test case 1: Non-empty object
console.log('Test 1:', isEmpty({ "x": 5, "y": 42 })); // Expected: false

// Test case 2: Empty object
console.log('Test 2:', isEmpty({})); // Expected: true

// Test case 3: Non-empty array
console.log('Test 3:', isEmpty([null, false, 0])); // Expected: false

// Test case 4: Empty array
console.log('Test 4:', isEmpty([])); // Expected: true