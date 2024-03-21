function numbersOfDivisorsAndSum(n) {
  let count = 0;
  let divisorSum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
      divisorSum += i;
    }
  }

  return [count, divisorSum];
}

let res = numbersOfDivisorsAndSum(4);
console.log(res);
