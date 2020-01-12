const calculator = require('./calculator.js')

test("It adds", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("It subtracts", () => {
    expect(calculator.subtract(4, 1)).toBe(3);
});

test("It divides", () => {
    expect(calculator.divide(9, 3)).toBe(3);
});

test("It multiplies", () => {
    expect(calculator.multiply(7, 6)).toBe(42);
});