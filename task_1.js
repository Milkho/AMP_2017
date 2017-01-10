'use strict'

const a = 1, b = 2, c = 3, d = 4;

if (a < 0 || b < 0 || c < 0 || d < 0) {
  console.log('numbers should not be negative');
} else {
  console.log( calcGeometricMean(a, b, c, d) );
}

 
function calcGeometricMean () {
  var result = 1;
  
  for (var i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  } 
  result = Math.pow(result, 1 / arguments.length);
  
  return result;
}
