function maximizeSquareHoleArea(n, m, hBars, vBars) {
    function longestConsecutive(arr) {
        arr.sort((a, b) => a - b);
        let maxLen = 0;
        let curr = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i === 0 || arr[i] !== arr[i - 1] + 1) {
                curr = 1;
            } else {
                curr++;
            }
            maxLen = Math.max(maxLen, curr);
        }
        return maxLen;
    }

    const maxH = longestConsecutive(hBars);
    const maxV = longestConsecutive(vBars);
    const side = Math.min(maxH, maxV) + 1;
    return side * side;
}

module.exports = maximizeSquareHoleArea;