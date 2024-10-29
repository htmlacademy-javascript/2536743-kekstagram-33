function checksLength(str, quantityChars) {
  return str.length <= quantityChars;
}

function checksPalindrome(str) {
  const normalStr = (str.toLowerCase()).replaceAll(' ', '');
  let reverseStr = '';
  for (let i = normalStr.length - 1; i >= 0; i--) {
    reverseStr += normalStr[i];
  }
  return normalStr === reverseStr;
}

function extractsDigits(str) {
  if (Number.isInteger(str)) {
    str = str.toString();
    console.log(typeof str);
  }

  let strFromDigits = '';
  for (let i = 0; i <= str.length - 1; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      strFromDigits += str[i];
    }
  }
  return strFromDigits === '' ? NaN : strFromDigits;
}

console.log(checksLength('uuuu', 10));
console.log(checksPalindrome('444'));
console.log(extractsDigits('ertveerr'));
