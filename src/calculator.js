const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

function add(a, b) {
  return a + b;
}

console.log(add(a, b));
console.log(modulo(a, b));

function modulo(a, b) {
  return a % b;
}

module.exports = {
  add,
  modulo
};
