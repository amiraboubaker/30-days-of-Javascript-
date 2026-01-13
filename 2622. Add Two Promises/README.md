# 2622. Add Two Promises

## Intuition

Both promises eventually resolve to numbers. Since JavaScript promises can be awaited or combined, the task reduces to waiting for both values and returning their sum once they are available.

## Approach

1. Use `Promise.all` to wait for both promises to resolve.
2. Once both values are available, add them together.
3. Return a new promise that resolves with the computed sum.

This ensures the result is produced only after both input promises have resolved.

## Complexity

- Time complexity:  
  O(1), since the operation involves a constant number of promises and arithmetic.

- Space complexity:  
  O(1), as only constant extra space is used.

## Code
```javascript
/**
 * @param {Promise<number>} promise1
 * @param {Promise<number>} promise2
 * @return {Promise<number>}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
};
```