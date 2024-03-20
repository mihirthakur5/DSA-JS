function factorial(n) {
  let fact = BigInt(1);

  if (n === 0 || n === 1) {
    return fact;
  }

  for (let i = 2n; i <= BigInt(n); i++) {
    fact *= i;
  }
  return fact;
}

function factorialDigitSum(n) {
  let fact = factorial(n).toString();
  let sum = 0;
  for (let i = 0; i < fact.length; i++) {
    sum += parseInt(fact[i]);
  }
  return sum;
}

let res = factorialDigitSum(100);
console.log(res);
