



const { add, modulo, subtract, divide } = require("../src/calculator");

test("2 + 3 should equal 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("-2 + 3 should equal -5", () => {
    expect(subtract(-2, 3)).toBe(-5);
});

test("-2 + 3 should equal -5", () => {
    expect(subtract(-2, 3)).toBe(-5);
});

test("5 - 3 should equal 2", () => {
    expect(subtract(5, 3)).toBe(2);
});

test("7 modulo 3 should equal 1", () => {
    expect(modulo(7, 3)).toBe(1);
});

test("6 divided by 3 should equal 2", () => {
    expect(divide(6, 3)).toBe(2);
}); 