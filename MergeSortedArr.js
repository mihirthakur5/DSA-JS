function mergeSortedArray(m, nums1, n, nums2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    merged.push(nums1[i]);
    i++;
  }

  while (j < n) {
    merged.push(nums2[j]);
    j++;
  }

  return merged;
}
let res = mergeSortedArray(3, [1, 2, 3], 3, [2, 5, 6]);
console.log(res);
