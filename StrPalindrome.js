function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(str[left])) {
      left++;
      continue;
    }

    if (!isAlphaNumeric(str[right])) {
      right--;
      continue;
    }

    if (str[left].toLowerCase() == str[right].toLowerCase()) {
      left++;
      right--;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function isAlphaNumeric(ch) {
  return /^[a-zA-Z0-9]/.test(ch);
}

let res = isPalindrome("A man, a plan, a canal: Panama");
console.log(res);
