const expect = require('./solution');

// Test 1: expect(5).toBe(5) should return true
try {
    const result = expect(5).toBe(5);
    console.log('Test 1 passed:', result);
} catch (e) {
    console.log('Test 1 failed:', e.message);
}

// Test 2: expect(5).toBe(null) should throw "Not Equal"
try {
    const result = expect(5).toBe(null);
    console.log('Test 2 failed: should have thrown error');
} catch (e) {
    console.log('Test 2 passed:', e.message);
}

// Test 3: expect(5).notToBe(null) should return true
try {
    const result = expect(5).notToBe(null);
    console.log('Test 3 passed:', result);
} catch (e) {
    console.log('Test 3 failed:', e.message);
}

// Test 4: expect(5).notToBe(5) should throw "Equal"
try {
    const result = expect(5).notToBe(5);
    console.log('Test 4 failed: should have thrown error');
} catch (e) {
    console.log('Test 4 passed:', e.message);
}