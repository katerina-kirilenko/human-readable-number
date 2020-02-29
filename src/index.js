module.exports = function toReadable (number) {
  let vocabulary = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety"
  };

  let sotni = "hundred";

  function numIsVocabulary(number) {
      let word = "";
      for (let key in vocabulary) {
          if (number == key) {
              word = vocabulary[key];
          }
      }
      return word;
  }

  let fewWords = "";
  if (number in vocabulary) {
      fewWords = numIsVocabulary(number);
  } else if (Math.trunc(number / 100) > 0) {
      fewWords = numIsVocabulary(Math.trunc(number / 100)) + " " + sotni;
      number -= Math.trunc(number / 100) * 100;
      if ((number > 0) && (number in vocabulary)) {
          fewWords += " " + numIsVocabulary(number);
      } else if (Math.trunc(number / 10) > 0) {
          fewWords +=
              " " +
              numIsVocabulary(number - (number % 10)) +
              " " +
              numIsVocabulary(number % 10);
      }
  } else {
      fewWords =
          numIsVocabulary(number - (number % 10)) +
          " " +
          numIsVocabulary(number % 10);
  }

  return fewWords;
}
