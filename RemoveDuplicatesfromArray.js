function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let count = 1,
    currIdx = 1;

  while (currIdx < nums.length) {
    if (nums[currIdx] !== nums[currIdx - 1]) {
      count++;
    }
    currIdx += 1;
  }
  return count;
}

let res = removeDuplicates([2, 4, 4, 4, 6, 8, 8]);
console.log(res);
