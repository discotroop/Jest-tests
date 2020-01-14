const caesar = require('./caesar.js')

test("lowercase 'a' equals 'n'", () => {
    expect(caesar("a")).toBe("n");
});

test("multicharacter lowercase, 'ab' equals 'no'", () => {
    expect(caesar("ab")).toBe("no");
});

test("lowercase circles, 'z' = 'm' ", () => {
    expect(caesar("z")).toBe("m");
})

test("lowercase alphabet", () => {
    expect(caesar("abcdefghijklmnopqrstuvwxyz")).toBe("nopqrstuvwxyzabcdefghijklm")
})