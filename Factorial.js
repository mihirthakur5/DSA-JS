function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
}

let res = factorial(3);
console.log(res);
