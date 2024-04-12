class MyMath {
  static sum = (a, b) => a + b;
  static sub = (a, b) => a - b;
  static multy = (a, b) => a * b;
  static div = (a, b) => a / b;
}

const object = {
  key1: "value",
  key2: "value2",
};

const func = () => {
  return 1 + 2;
};

module.exports = {
  MyMath,
  object,
  func,
};
