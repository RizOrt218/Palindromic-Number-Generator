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