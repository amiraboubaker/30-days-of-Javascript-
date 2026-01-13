# 2621. Sleep

Mira  
0  
a few seconds ago  
JavaScript  

## Approach
Return a new Promise.  
Use setTimeout inside the promise to delay execution.  
Resolve the promise after millis milliseconds.  
The resolved value is irrelevant, since the problem only checks the delay.  

## Complexity
**Time complexity:**  
O(1), as the function schedules a single timer.  

**Space complexity:**  
O(1), since only a constant amount of memory is used.  

## Code
```javascript
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // ~100
 */
```