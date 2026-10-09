const { add , modulo } = require("../src/calculator");

test("2 + 3 should equal 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("7 modulo 3 should equal 1", () => {
  expect(modulo(7, 3)).toBe(1);
});