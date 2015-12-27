var count = 0;
var arrayMem = [];

function palindromeNumberGenerator( value ){
  var sum;
  var reverseSum = sum.split('').reverse().join('');


  sum = value + reverseSum;

  count++;

  if( sum === reverseSum ){
    return sum + "is a Palindrome Number";

  }
}
palindromeNumberGenerator( 15 );

// function palindromic(number, steps) {
//   var returnObj = {};
//   steps = steps || '0';

//   // check if number passed in is palindrome
//   var numberStrReversed = number.toString().split("").reverse().join("");
//   if (number.toString() === numberStrReversed) {
//     returnObj.value = number;
//     returnObj.steps = parseInt(steps);

//     return returnObj;
//   } else {
//     var newNumber = number + parseInt(numberStrReversed);
//     var newStep = parseInt(steps) + 1 + '';
//     return palindromic(newNumber, newStep);
//   }
// }