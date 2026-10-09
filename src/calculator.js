const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
};

console.log(add(a, b));
console.log(divide(a, b));

module.exports = {
  add,
  divide
};
