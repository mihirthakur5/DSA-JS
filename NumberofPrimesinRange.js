function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function numberOfPrimesInRange(l, r) {
  let count = 0;

  for (let i = l; i <= r; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}
let res = numberOfPrimesInRange(1, 5);
console.log(res);
