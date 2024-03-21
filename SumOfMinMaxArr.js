function minMax(arr, n) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return min + max;
}

let res = minMax([-2, 1, -4, 5, 3], 5);
console.log(res);
