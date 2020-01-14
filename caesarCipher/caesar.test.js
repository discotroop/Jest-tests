const caesar = require('./caesar.js')

test("lowercase 'a' equals 'n'", () => {
    expect(caesar("a")).toBe("n");
});

test("multicharacter lowercase, 'ab' equals 'no'", () => {
    expect(caesar("ab")).toBe("no");
});

test("lowercase circles, 'z' = 'm' ", () => {
    expect(caesar("z")).toBe("m");
});

test("lowercase alphabet", () => {
    expect(caesar("abcdefghijklmnopqrstuvwxyz")).toBe("nopqrstuvwxyzabcdefghijklm")
});

test("uppercase 'A' equals 'N'", () => {
    expect(caesar("A")).toBe("N");
});

test("multicharacter uppercase, 'AB' equals 'NO'", () => {
    expect(caesar("AB")).toBe("NO");
});

test("uppercase circles, 'Z' = 'M' ", () => {
    expect(caesar("Z")).toBe("M");
});

test("uppercase alphabet", () => {
    expect(caesar("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("NOPQRSTUVWXYZABCDEFGHIJKLM")
});

test("mixed case, 'AbXz' = 'NoKm' ", () => {
    expect(caesar("AbXz")).toBe("NoKm");
});

test("skips punctuation, 'A.b' = 'N.o' ", () => {
    expect(caesar("A.b")).toBe("N.o");
});