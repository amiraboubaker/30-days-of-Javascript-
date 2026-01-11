function createCounter(n) {
    let current = n;
    return function() {
        return current++;
    };
}

module.exports = createCounter;