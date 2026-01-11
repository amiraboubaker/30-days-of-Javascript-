const createCounter = require('./solution');

// Test case 1: init = 5, calls = ["increment","reset","decrement"]
const counter1 = createCounter(5);
console.log('Test 1:');
console.log(counter1.increment()); // Expected: 6
console.log(counter1.reset()); // Expected: 5
console.log(counter1.decrement()); // Expected: 4

// Test case 2: init = 0, calls = ["increment","increment","decrement","reset","reset"]
const counter2 = createCounter(0);
console.log('Test 2:');
console.log(counter2.increment()); // Expected: 1
console.log(counter2.increment()); // Expected: 2
console.log(counter2.decrement()); // Expected: 1
console.log(counter2.reset()); // Expected: 0
console.log(counter2.reset()); // Expected: 0