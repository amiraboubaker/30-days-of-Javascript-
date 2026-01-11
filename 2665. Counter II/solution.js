function createCounter(init) {
    let current = init;
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => current = init
    };
}

module.exports = createCounter;