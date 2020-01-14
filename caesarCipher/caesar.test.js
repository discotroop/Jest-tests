const caesar = require('./caesar.js')

test("lowercase 'a' equals 'n'", () => {
    expect(caesar("a")).toBe("n");
});
