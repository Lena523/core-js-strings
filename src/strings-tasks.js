/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  const strLength = value === null || value === undefined ? 0 : value.length;
  return strLength;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  const checkString = typeof value === 'string' || value instanceof String;
  return checkString;
}

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1 - The first string to concatenate.
 * @param {string} value2 - The second string to concatenate.
 * @return {string} - The concatenated string.
 *
 * @example
 *   concatenateStrings('aa', 'bb') => 'aabb'
 *   concatenateStrings('aa', '') => 'aa'.
 *   concatenateStrings('', 'bb') => 'bb'
 */
function concatenateStrings(value1, value2) {
  const concatResult = value1 + value2;
  return concatResult;
}

/**
 * Returns the first character of the given string.
 *
 * @param {string} value - The input string to extract the first character from.
 * @return {string} - The first character of the string.
 *
 * @example
 *   getFirstChar('John Doe') => 'J'
 *   getFirstChar('cat') => 'c'
 *   getFirstChar('') => ''
 */
function getFirstChar(value) {
  const firstChar = value.charAt(0);
  return firstChar;
}

/**
 * Removes leading and trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading and trailing whitespaces from.
 * @return {string} - The string with leading and trailing whitespaces removed.
 *
 * @example
 *   removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
 *   removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  const arrTrimmed = value.trim();
  return arrTrimmed;
}

/**
 * Removes only leading whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  const arrLeadTrim = value.trimStart();
  return arrLeadTrim;
}

/**
 * Removes only trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  const arrTrailTrim = value.trimEnd();
  return arrTrailTrim;
}

/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  let count = 0;
  if (times < 0) {
    count = 0;
  } else {
    count = times;
  }
  const arrRepeat = str.repeat(count);
  return arrRepeat;
}

/**
 * Remove the first occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(str, value) {
  const ind = str.indexOf(value);
  if (ind === -1) {
    return str;
  }
  return str.slice(0, ind) + str.slice(ind + value.length);
}

/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(str, value) {
  const ind = str.lastIndexOf(value);
  if (ind === -1) {
    return str;
  }
  return str.slice(0, ind) + str.slice(ind + value.length);
}

/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  let i = 0;
  let sum = 0;

  const strLength = !str ? 0 : str.length;

  while (i < strLength) {
    sum += str.charCodeAt(i);
    i += 1;
  }
  return sum;
}

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  const startWith = str.startsWith(substr);
  return startWith;
}

/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  const endWith = str.endsWith(substr);
  return endWith;
}

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  let min = '';
  let sec = '';
  const minute = String(minutes);
  const second = String(seconds);
  if (minute === '0') {
    min = '00';
  } else if (minute.length > 1) {
    min = minute;
  } else if (minute.length === 1) {
    min = minute;
    min = min.padStart(2, '0');
  }
  if (second === '0') {
    sec = '00';
  } else if (second.length > 1) {
    sec = second;
  } else if (second.length === 1) {
    sec = second;
    sec = sec.padStart(2, '0');
  }
  return min.concat(':', sec);
}

/**
 * Returns a string in reverse order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in reverse order.
 *
 * @example:
 *   reverseString('abcdef') => 'fedcba'
 *   reverseString('12345') => '54321'
 */
function reverseString(str) {
  const arrReversed = str.split('').reverse().join('');
  return arrReversed;
}

/**
 * Returns a string with characters in alphabetical order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in alphabetical order.
 *
 * @example:
 *   orderAlphabetically('webmaster') => 'abeemrstw'
 *   orderAlphabetically('textbook') => 'bekoottx'
 *   orderAlphabetically('abc123xyz') => '123abcxyz'
 */
function orderAlphabetically(str) {
  const strSorted = str.split('').sort().join('');
  return strSorted;
}

/**
 * Checks if a given string contains a specified substring.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substring - The substring to check for in the input string.
 * @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 *
 * @example
 *   containsSubstring('Hello, World!', 'World') => true
 *   containsSubstring('JavaScript is Fun', 'Python') => false
 *   containsSubstring('12345', '34') => true
 */
function containsSubstring(str, substring) {
  const arrHas = str.includes(substring);
  return arrHas;
}

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  const vowels = /[aeiouy]/gi;
  const hasVowel = str.match(vowels);
  if (hasVowel) {
    return hasVowel.length;
  }

  return 0;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - The input string.
 * @return {bool} - True if the string is a palindrome, false otherwise.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */
function isPalindrome(str) {
  const strA = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const lastIndex = strA.length - 1;
  for (let i = 0; i < strA.length / 2; i += 1) {
    if (strA[i] !== strA[lastIndex - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let theLongest = 0;
  let theWord = '';
  for (let i = 0; i < words.length; i += 1) {
    if (theLongest < words[i].length) {
      theLongest = words[i].length;
      theWord = words[i];
    }
  }
  return theWord;
}

/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  const words = str.split('').reverse().join('').split(' ').reverse().join(' ');
  return words;
}

/**
 * Inverts the case of each character in the given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the case of each character inverted.
 *
 * @example
 *   invertCase('Hello, World!') =>  'hELLO, wORLD!'
 *   invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
 *   invertCase('12345') => '12345'
 */
function invertCase(str) {
  let arrInverted = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') {
      if (str[i] === str[i].toUpperCase()) {
        arrInverted += str[i].toLowerCase();
      } else {
        arrInverted += str[i].toUpperCase();
      }
    } else {
      arrInverted += str[i];
    }
  }
  return arrInverted;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName - The first name to include in the template.
 * @param {string} lastName - The last name to include in the template.
 * @return {string} - The formatted string generated from the template.
 *
 * @example
 *   getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
 *   getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const arrValue = value.replace('!', '');
  const variables = arrValue.split(' ');
  return `${variables[1]} ${variables[2]}`;
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  let strA = str.replace('<', '');
  strA = strA.replace('>', '');
  return strA;
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  let strB = str.replaceAll(';', ',');
  strB = strB.split(',');
  return strB;
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const shift = 13;
  const reg = /[а-яa-z1-9]/gi;
  const dict1 = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  const dict2 = {
    0: 'Z',
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
  };

  let cipher = '';
  for (let i = 0; i < str.length; i += 1) {
    const letter = str[i];
    if (letter.match(reg)) {
      const num = (dict1[letter.toUpperCase()] + shift) % 26;
      if (str[i] === str[i].toUpperCase()) {
        cipher += dict2[num];
      } else {
        cipher += dict2[num].toLowerCase();
      }
    } else {
      cipher += str[i];
    }
  }
  return cipher;
}

/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const deckOfCards = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];
  return deckOfCards.indexOf(value);
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
