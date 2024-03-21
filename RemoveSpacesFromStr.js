function removeSpaces(s) {
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      newStr += s[i];
    }
  }

  return newStr;
}

let res = removeSpaces("learn by doing");
console.log(res);
