function multiplyNumbers(a, b) {
  return a*b;
}

console.log( multiplyNumbers.apply(this, [2, 3]));

