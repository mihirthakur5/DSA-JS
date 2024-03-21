function rotateArray(n, k, nums) {
  k = k % n;
  let rotatedArr = [];

  for (let i = 0; i < n; i++) {
    if (i < k) {
      rotatedArr.push(nums[n + i - k]);
    } else {
      rotatedArr.push(nums[i - k]);
    }
  }

  return rotatedArr;
}

let res = rotateArray(7, 3, [1, 2, 3, 4, 5, 6, 7]);
console.log(res);
