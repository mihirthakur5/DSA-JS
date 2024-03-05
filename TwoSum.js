function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(arr[i], i);
  }
}

let res = twoSum([2, 7, 11, 15], 9);
console.log(res);
