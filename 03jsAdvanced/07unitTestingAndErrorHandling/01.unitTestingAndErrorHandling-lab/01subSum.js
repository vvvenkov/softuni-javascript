function subSum(array, startIndex, endIndex) {
    if (Array.isArray(array) == false) {
        return NaN;
    }
    if (startIndex < 0) { startIndex = 0; }
    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }
    return array
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc, x) => acc + x, 0);
}

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));