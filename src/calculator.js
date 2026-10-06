const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log("add: ", add(a, b));
console.log("subtract: ", subtract(a, b));

module.exports = {
  add,
  subtract
};
