var removeKdigits = function (num, k) {
  let largest = num;
  if (num.length === k) return "0";
  for (let i = 0; i < num.length - k; ++i) {
    let currentNum = parseInt(num.replace(num.slice(i, i + k), ""));
    console.log(currentNum);
    if (currentNum < largest) {
      largest = currentNum;
    }
  }
  return largest.toString();
};
