/**
 * Turn a string of 24h time into words.

 * You can trust that you’ll be given a valid string 
 * (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). 
 * Hours 0-11 are am, and hours 12-23 are pm.
 */

function timeWord(timeString) {
  const hours = timeString.slice(0, 2);
  const minutes = timeString.slice(3, 5);

  // convert hours, minutes(int) to text(string)
  const newHours = convertHours(hours); // string of two digits
  const hoursWord = hoursToWords(hours, newHours, minutes); // hours string
  const minutesWord = minutesToWords(hours, minutes); // minutes string

  // get AM/PM; use military hours as input
  const meridian = getAmPm(hours, hoursWord);

  let result = hoursWord + " " + minutesWord + " " + meridian;

  // remove extra spaces in result
  result = result.replace(/\s+/g, " ");
  result = result.trimEnd();
  // return result
  return result;
}

// timeWord("00-11");

module.exports = timeWord;
