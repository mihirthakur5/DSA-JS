function mergeTwoList(list1, list2) {
  let list1 = [1, 2, 3];
  let list2 = [4, 5, 6];
  let ans = [];

  for (let i = 0; i < list1.length; i++) {
    ans.push(i);
  }

  return ans;
}

let res = mergeTwoList([1, 2, 3], [4, 5, 6]);
console.log(res);
