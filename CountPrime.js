function countPrime(n) {
  let composite = new Array(n).fill(1);
  composite[0] = 0;
  composite[1] = 0;

  let count = 0;

  for (let i = 2; i < n; i++) {
    if (composite[i] == 1) {
      count++;
      for (let j = i * i; j < n; j += i) {
        composite[j] = 0;
      }
    }
  }
  return count;
}
let res = countPrime(5);
console.log(res);
