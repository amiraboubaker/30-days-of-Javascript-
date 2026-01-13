const addTwoPromises = require('./solution');

async function testAddTwoPromises() {
    // Test case 1: promise1 resolves to 1, promise2 to 2, sum should be 3
    const promise1 = Promise.resolve(1);
    const promise2 = Promise.resolve(2);
    const result1 = await addTwoPromises(promise1, promise2);
    console.log('Test 1: addTwoPromises(1, 2) =', result1, '(expected: 3)');

    // Test case 2: delayed promises, 5 and 10, sum 15
    const promise3 = new Promise(resolve => setTimeout(() => resolve(5), 50));
    const promise4 = new Promise(resolve => setTimeout(() => resolve(10), 100));
    const result2 = await addTwoPromises(promise3, promise4);
    console.log('Test 2: addTwoPromises(5, 10) =', result2, '(expected: 15)');
}

testAddTwoPromises();