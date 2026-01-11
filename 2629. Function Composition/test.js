const compose = require('./solution');

// Test case 1: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log('Test 1:', fn1(4)); // Expected: 65

// Test case 2: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log('Test 2:', fn2(1)); // Expected: 1000

// Test case 3: functions = [], x = 42
const fn3 = compose([]);
console.log('Test 3:', fn3(42)); // Expected: 42