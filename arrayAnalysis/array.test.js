const capitalized = require('./array.js');

test('first letter is capitalized', () => {
    expect(capitalized("bob")).toBe("Bob")
});