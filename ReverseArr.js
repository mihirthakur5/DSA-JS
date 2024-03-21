function reverseArray(n, arr) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let temp;
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

let res = reverseArray(5, [5, 12, 9, 1, 8]);
console.log(res);
