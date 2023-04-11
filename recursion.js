function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

let result = factorial(0);
console.log(result);

function loop_factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}

// let result = loop_factorial(0);
// console.log(result);
