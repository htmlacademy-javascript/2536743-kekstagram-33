const checksLength = (str, quantityChars) => str.length <= quantityChars;

const checksPalindrome = (str) => {
  const normalStr = str.toLowerCase().replaceAll(' ', '');
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
  return strFromDigits === '' ? NaN : +strFromDigits;
};

const checksMeeting = (startDay, endDay, startMeeting, durationMeeting) => {
  const startDayArr = startDay.split(':');
  const endDayArr = endDay.split(':');
  const startMeetingArr = startMeeting.split(':');

  const startDayValue = startDayArr.reduce((sum, element) => sum * 60 + (+element), 0);
  const endDayValue = endDayArr.reduce((sum, element) => sum * 60 + (+element), 0);
  const startMeetingValue = startMeetingArr.reduce((sum, element) => sum * 60 + (+element), 0);
  const endMeetingValue = startMeetingValue + durationMeeting;

  return startMeetingValue >= startDayValue && endMeetingValue <= endDayValue;
};

checksLength('string', 6);
checksPalindrome('потоп');
extractsDigits('333hh333');
checksMeeting('8:00', '17:30', '08:00', 900);


