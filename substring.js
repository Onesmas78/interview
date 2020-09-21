function longest(s) {
  let checking = [];
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (checking.indexOf(s[i]) === -1) {
      checking.push(s[i]);
      if (checking.length > longest) {
        longest = checking.length;
      } else {
        checking = checking.slice(checking.indexOf(s[i]) + 1, checking.length);
        checking.push(s[i]);
      }
    }
  }

  return console.log(longest);
}
let str = "abcabcdefghi";

longest(str);

//get s;
//
