const maximizeSquareHoleArea = require('./solution');

// Test case 1: hBars = [2,3,4], vBars = [2,3,4], expected = 16
console.log('Test 1:');
const result1 = maximizeSquareHoleArea(5, 5, [2, 3, 4], [2, 3, 4]);
console.log('Result:', result1); // Expected: 16
console.log('Expected: 16');
console.log(result1 === 16 ? 'PASS' : 'FAIL');

// Test case 2: hBars = [1], vBars = [1], expected = 4
console.log('Test 2:');
const result2 = maximizeSquareHoleArea(2, 2, [1], [1]);
console.log('Result:', result2); // Expected: 4
console.log('Expected: 4');
console.log(result2 === 4 ? 'PASS' : 'FAIL');

// Test case 3: hBars = [1,2,3,5], vBars = [1,2,4], expected = 9
console.log('Test 3:');
const result3 = maximizeSquareHoleArea(5, 4, [1, 2, 3, 5], [1, 2, 4]);
console.log('Result:', result3); // Expected: 9
console.log('Expected: 9');
console.log(result3 === 9 ? 'PASS' : 'FAIL');