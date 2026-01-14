# 2705. Cancellable Function

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as arguments.

The cancelFn function should cancel the delayed execution if called before t milliseconds have elapsed. If cancelFn is called after the execution has already happened, it should do nothing.

## Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20

Output: [{"time": 20, "returned": 10}]

Explanation: 

const cancelTime = 50

const cancelFn = cancellable(fn, args, t);

setTimeout(cancelFn, cancelTime);

The cancellation was scheduled to occur after a delay of cancelTime Ms.

At time 20ms, fn was called with args, and the returned value was 10.

At time 50ms, cancelFn was called, but since the function was already called, it did nothing.

## Example 2:

Input: fn = (x) => x**2, args = [2], t = 100

Output: []

Explanation: 

const cancelTime = 50

const cancelFn = cancellable(fn, args, t);

setTimeout(cancelFn, cancelTime);

The cancellation was scheduled to occur after a delay of cancelTime Ms.

At time 50ms, cancelFn was called, and since the function was not yet called, it was cancelled.

At time 100ms, fn was not called.

## Example 3:

Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30

Output: [{"time": 30, "returned": 8}]

Explanation: 

const cancelTime = 100

const cancelFn = cancellable(fn, args, t);

setTimeout(cancelFn, cancelTime);

The cancellation was scheduled to occur after a delay of cancelTime Ms.

At time 30ms, fn was called with args, and the returned value was 8.

At time 100ms, cancelFn was called, but since the function was already called, it did nothing.

## Constraints:

- fn is a function
- args is a valid JSON array
- 1 <= args.length <= 10
- 20 <= t <= 1000
- 10 <= cancelTime <= 1000</content>
<parameter name="filePath">c:\30-days-of-Javascript-\2705. Cancellable Function\README.md