/**
 * Takes two strings including only letters from a to z.
 * Returns a new sorted string containing distinct letters.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'azy', 'bk' => 'abkyz'
 *   'zxxlal','laxk'    => 'aklxz'
 *   'abcdefghijklmnop',  'lmnopqrstuvwxyz'  => 'abcdefghijklmnopqrstuvwxyz'
 */
function distinctLettersString(value1, value2) {
  const string = (value1 + value2);
  const array = string.split('');
  array.sort(function (a, b) {
    return a.localeCompare(b);
  });
  const uniqueArray = array.filter(function (item, pos) {
    return array.indexOf(item) === pos;
  });
  return uniqueArray.join('');
}


/**
 * Takes a string with any characters.
 * Returns an object containing appearence of every distinct letters in lower case.
 *
 * @param {string} value
 * @return {Object}
 *
 * @example
 *  'Who you are, Buddy?' => { a:1, d:2, e:1, h:1, o:2, r:1, u:2, y:2 }
 *
 */

function lowerLetters(value) {
  const newArrey = value.split(' ').filter(item => item.length > 2);
  const newString = newArrey.join(',');
  const sortString = newString.split('').sort().join('');
  const arr = [];
  for (let i = 0; i < sortString.length; i++) {
    if (sortString[i] !== sortString[i].toUpperCase()) {
      arr.push(sortString[i]);
    }
  }
  const obj = {};
  const str = arr.join('');
  for (let x = 0; x < str.length; x++) {
    var l = str.charAt(x);
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
  }
  return obj;
}

/**
 * Write a function that will convert a string into title case, given an optional
 * list of exception (minor words). The list of minor words will be given as a
 * string with each word separated by a space. Your function should ignore the
 * case of the minor words string - it should behave in the same way even if the
 * case of the minor word is changed
 *
 * @param {string} the original string to be converted
 * @param {string} list of minor words that must always be lowercase except for
 *                  the first word in the string
 * @return {string}
 *
 * @example
 *    'a clash if KINGS', 'a an the of'    =>  'A Clash of Kings'
 *    'THE WIND IN THE WILLOWS', 'The In'  => 'The Wind in the Willows'
 *    'the quick brown fox'  => 'The Quick Brown Fox'
 */

function titleCaseConvert(title, minorWords) {
  const arrTitle = title.toLowerCase().split(' ');
  const arrMinor = (minorWords === undefined) ? '' : minorWords.toLowerCase().split(' ');
  const arrResult = [];
  for (let i = 0; i < arrTitle.length; i++) {
    if (arrMinor.indexOf(arrTitle[i]) !== -1) {
      arrResult.push(arrTitle[i]);
    } else {
      arrResult.push(arrTitle[i][0].toUpperCase() + arrTitle[i].substring(1));
    }
  }
  const arr = [];
  for (let i = 0; i < arrResult.length; i++) {
    if (arr.includes('The')) {
      arr.push(arrResult[i]);
    } else if (arrResult.indexOf(arrResult[i]) === 0) {
      arr.push(arrResult[i][0].toUpperCase() + arrResult[i].substring(1));
    } else {
      arr.push(arrResult[i]);
    }
  }
  return arr.join(' ');
}

/**
 * Your job is to create a calculator which evaluates expressions in Reverse Polish
 * notation (https://en.wikipedia.org/wiki/Reverse_Polish_notation). Empty expression
 * should evaluate to 0. Expression without operation returns the last number.
 *
 * @param {string} RPN string, each number and operation separated by a space
 *
 * @return {Number}
 *
 * @example
 *  ''  =>  0  // empty expression returns 0
 *  '1 2 3'  =>  3  // expression without operation returns the last number
 *  '4 2 +'  =>  6  // 4 + 2
 *  '2 5 * 2 + 3 /'  =>  4   //  ((5 * 2) + 2) / 3
 *  '5 1 2 + 4 * + 3 -'  =>  14   // 5 + ((1 + 2) * 4) -3
 */

function calcRPN(postfix) {
  console.log('____', typeof postfix);
  if (postfix === '') {
    return 0;
  }

  var resultStack = [];
  postfix = postfix.split(' ');

  console.log(postfix);
  for (var i = 0; i < postfix.length; i++) {
    console.log('____', postfix[i]);
    if (postfix[i] === '+') {
      return postfix[i - 1] + postfix[i - 2];
    } else if (postfix[i] === '-') {
      return postfix[i - 1] + postfix[i - 2];
    } else if (postfix[i] === '*') {
      return postfix[i - 1] + postfix[i - 2];
    } else if (postfix[i] === '/') {
      return postfix[i - 1] + postfix[i - 2];
    } else if (postfix[i] === '^') {
      return Math.pow(postfix[i - 1], postfix[i - 2]);
    } else if(typeof +postfix[i] === 'number'){
      return postfix[postfix.length -1];
    }
  }
}


module.exports = {
  distinctLettersString,
  lowerLetters,
  titleCaseConvert,
  calcRPN
};
