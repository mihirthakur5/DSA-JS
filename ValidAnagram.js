function validAnagram(s, t) {
  if (s === undefined) {
    return (s = "");
  }
  if (t === undefined) {
    return (t = "");
  }

  if (s.length != t.length) {
    return false;
  }

  let characterMap = {};

  for (let i = 0; i < s.length; i++) {
    characterMap[s[i]] = (characterMap[s[i]] || 0) + 1;
    characterMap[t[i]] = (characterMap[t[i]] || 0) - 1;
  }

  for (let char in characterMap) {
    if (characterMap[char] != 0) {
      return false;
    }
  }
  return true;
}

let res = validAnagram("rat", "car");
console.log(res);
