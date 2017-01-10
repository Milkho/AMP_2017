'use strict'

const A = [1, -2, -3, 4, -5, 6, 7, -8, 9, -10, 11, -12, 13, 14, -15];

console.log( calcSum(A) );

function calcSum(A) {
  var sum = 0;

  for (var i = 0; i < A.length; i+=2)
  {
    if (A[i] > 0) {
	    sum += A[i];
    }
  }
  
  return sum;
}
