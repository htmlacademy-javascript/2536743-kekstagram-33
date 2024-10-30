const checksLength = (str, quantityChars) => str.length <= quantityChars;

const checksPalindrome = (str) => {
  const normalStr = (str.toLowerCase()).replaceAll(' ', '');
  let reverseStr = '';
  for (let i = normalStr.length - 1; i >= 0; i--) {
    reverseStr += normalStr[i];
  }
  return normalStr === reverseStr;
};

const extractsDigits = (str) => {
  if (Number.isInteger(str)) {
    str = str.toString();
  }

  let strFromDigits = '';
  for (let i = 0; i <= str.length - 1; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      strFromDigits += str[i];
    }
  }
  return strFromDigits === '' ? NaN : strFromDigits;
};

