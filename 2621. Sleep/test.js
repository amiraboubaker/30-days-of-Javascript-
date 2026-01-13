const sleep = require('./solution');

async function testSleep() {
    // Test case 1: millis = 100
    let t1 = Date.now();
    await sleep(100);
    let elapsed1 = Date.now() - t1;
    console.log('Test 1: sleep(100) took', elapsed1, 'ms (expected ~100)');

    // Test case 2: millis = 200
    let t2 = Date.now();
    await sleep(200);
    let elapsed2 = Date.now() - t2;
    console.log('Test 2: sleep(200) took', elapsed2, 'ms (expected ~200)');
}

testSleep();