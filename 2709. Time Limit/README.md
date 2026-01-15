# Time Limit

# Intuition
We need to race the original asynchronous function against a timer.  
If the function finishes first, return its result.  
If the timer finishes first, reject with `"Time Limit Exceeded"`.  
This is exactly what `Promise.race` exists for, even if JavaScript pretends it’s not obvious.

# Approach
Create a wrapper function that:
- Starts executing `fn(...args)` immediately.
- Starts a timeout promise that rejects after `t` milliseconds.
- Uses `Promise.race` to return whichever finishes first.
If `fn` resolves or rejects before the timeout, its result is used.
If the timeout resolves first, reject with `"Time Limit Exceeded"`.

# Complexity
- Time complexity:  
  O(1) per call (timers and promises only)

- Space complexity:  
  O(1)

# Code
```javascript
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return Promise.race([
            fn(...args),
            new Promise((_, reject) =>
                setTimeout(() => reject("Time Limit Exceeded"), t)
            )
        ]);
    };
};
```