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
  const arrCheck = ['of', 'in', 'the'];
  const steck = [];

  arrTitle.forEach((item, i2)=>{ 
    for(let i = 0; i < arrCheck.length; i++){  
      if(!arrCheck.includes(item)|| i2 ===0){
        steck.push(item[0].toUpperCase() + item.substring(1));
        break;
      } else if(arrCheck.includes(item)){
        steck.push(item);
        break;
      }
    }
  });

  return steck.join(' ');

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
  if (postfix === '') {
    return 0;
  }

  const stack = [];
  const newArray = postfix.split(' ');
  newArray.forEach((elem, i, arr) => {
    if (!parseInt(elem)) {
      if (elem === '+') {
        const resalt = stack.pop() + stack.pop();
        stack.push(resalt);
      } else if (elem === '-') {
        const secondElem = stack.pop();
        const resalt = stack.pop() - secondElem;
        stack.push(resalt);
      } else if (elem === '*') {
        const resalt = stack.pop() * stack.pop();
        stack.push(resalt);
      } else if (elem === '/') {
        const secondElem = stack.pop();
        const resalt = stack.pop() / secondElem;
        stack.push(resalt);
      }
    } else {
      stack.push(+elem);
    }
  });
  return stack.pop();
}


module.exports = {
  distinctLettersString,
  lowerLetters,
  titleCaseConvert,
  calcRPN
};
