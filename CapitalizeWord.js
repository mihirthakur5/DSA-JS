function capitalizedWord(paragraph) {
  let capitalized = "";

  for (let i = 0; i < paragraph.length; i++) {
    if (
      (paragraph[i] >= "a" && paragraph[i] <= "z") ||
      (paragraph[i] >= "A" && paragraph[i] <= "Z")
    ) {
      if (i == 0 || (i > 0 && paragraph[i - 1] === " ")) {
        capitalized += paragraph[i].toUpperCase();
      } else {
        capitalized += paragraph[i].toLowerCase();
      }
    } else {
      capitalized += paragraph[i];
    }
  }

  return capitalized;
}

let res = capitalizedWord("the quick Brown fox jumps over The lazy dog.");
console.log(res);
