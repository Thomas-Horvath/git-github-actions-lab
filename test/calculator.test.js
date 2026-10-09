const { add } = require("../src/calculator");

test("2 + 3 should equal 6", () => {
    expect(add(2, 3)).toBe(6);
});