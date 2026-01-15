# Interval Cancellable Function

# Intuition
The function must execute immediately and then continue executing at fixed time intervals. The execution should stop only when a cancel function is called. This behavior directly matches how `setInterval` and `clearInterval` work in JavaScript.

# Approach
Call the function once at the beginning to handle the `0ms` execution.  
Use `setInterval` to repeatedly invoke the function every `t` milliseconds.  
Store the interval ID so it can be cleared later.  
Return a cancel function that stops the interval using `clearInterval`.

# Complexity
- Time complexity:  
  O(n), where `n` is the number of times the function is executed before cancellation.

- Space complexity:  
  O(1), since only a single interval identifier is stored.

# Code
```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args); // call immediately

    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearInterval(intervalId);
    };
};
```