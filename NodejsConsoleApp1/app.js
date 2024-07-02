console.time("Lead time");

/**
 * Generates a random RGB color string.
 * 
 * @returns {string} A string representing a random RGB color in the format `rgb(r,g,b)`.
 */
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

console.log(getRandomColor()); // Example: "rgb(123,45,67)"

/**
 * Iteratively prints numbers from start to end with their corresponding index.
 * 
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 */
function printNumbersWithIndex(start, end) {
    for (let index = 1; start <= end; start++, index++) {
        console.log(`${index} : ${start}`);
    }
}

printNumbersWithIndex(7, 9);
// Output:
// "1 : 7"
// "2 : 8"
// "3 : 9"

/**
 * Computes the power of a base number raised to an exponent iteratively.
 * 
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent (can be positive or negative).
 * @returns {number} The result of base raised to the power of exponent.
 */
function power(base, exponent) {
    if (exponent === 0) return 1; // Any number raised to the power of 0 is 1
    let result = 1;
    const positiveExponent = Math.abs(exponent);
    for (let i = 0; i < positiveExponent; i++) {
        result *= base;
    }
    return exponent < 0 ? 1 / result : result;
}

console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(2, -2)); // 0.25

console.timeEnd("Lead time");

console.log("The program completed successfully. To exit, press any key...");

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
