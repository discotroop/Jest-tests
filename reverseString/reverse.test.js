const reverseString = require('./reverse.js')

test("returns a string", () => {
    expect(reverseString("allan")).toBe("nalla")
});