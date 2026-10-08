const { add , subtract } = require("../src/calculator");

test("2 + 3 should equal 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("5 - 3 should equal 2", () => {
    expect(subtract(5, 3)).toBe(2);
});

test("-2 + 3 should equal -5", () => {
    expect(subtract(-2, 3)).toBe(-5);
});