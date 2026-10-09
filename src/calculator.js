function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function divide(a, b) {
  return a / b;
};

if (require.main === module) {
  const a = Number(process.argv[2]);
  const b = Number(process.argv[3]);

  console.log("add: ", add(a, b));
  console.log("subtract: ", subtract(a, b));
  console.log("divide: ", divide(a, b));
};

module.exports = {
  add,
  subtract,
  divide
};
