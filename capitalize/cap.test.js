const capitalized = require('./cap');

test('first letter is capitalized', () => {
    expect(capitalized("bob")).toBe("Bob")
});