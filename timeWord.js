/**
 * Turn a string of 24h time into words.

 * You can trust that you’ll be given a valid string 
 * (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). 
 * Hours 0-11 are am, and hours 12-23 are pm.
 */

function timeWord(s) {
  const splitted = s.split("-");
  const hours = splitted[0];
  const minutes = splitted[1];
  const result = `Hours = ${hours}, minutes=${minutes}`;
  console.log(result);
  return result;
}

timeWord("00-11");

module.exports = timeWord;
