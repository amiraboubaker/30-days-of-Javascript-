const cancellable = require('./solution');

// Test case 1: Basic functionality
console.log('Test 1: Basic cancellable interval');
let counter = 0;
const fn = () => counter++;
const cancelFn = cancellable(fn, [], 100); // call every 100ms

// Should call immediately, counter = 1
setTimeout(() => {
    console.log('After 50ms, counter:', counter); // should be 1
    if (counter === 1) console.log('PASS: Called immediately');
    else console.log('FAIL: Not called immediately');
}, 50);

// After 250ms, should have called 3 times (0, 100, 200), then cancel
setTimeout(() => {
    console.log('After 250ms, counter:', counter); // should be 3
    cancelFn();
    if (counter === 3) console.log('PASS: Called at intervals');
    else console.log('FAIL: Wrong number of calls');
}, 250);

// After cancel, should not call more
setTimeout(() => {
    console.log('After cancel + 200ms, counter:', counter); // should still be 3
    if (counter === 3) console.log('PASS: Cancelled successfully');
    else console.log('FAIL: Continued after cancel');
}, 450);