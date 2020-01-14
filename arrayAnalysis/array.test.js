const analysis = require('./array.js');
const object = analysis([1, 8, 3, 4, 2, 6]);

test("calculates average value of num array", () => {
    expect(object.average).toBe(4);
});

test("calculates smallest value in array", () => {
    expect(object.min).toBe(1);
});

test("calculate largest value in array", () => {
    expect(object.max).toBe(8);
});

test("calculates length of array", () => {
    expect(object.length).toBe(6);
});
