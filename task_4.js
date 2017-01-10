'use strict'

const str =  'JavaScript is easy to learn';

console.log( swapLetters(str) );


function swapLetters(str)
{
  var arr = str.split(' ');
  
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(arr[i].length - 1) + 
	     arr[i].slice(1, -1) + 
	     arr[i].charAt(0);
  }
  
  return arr.join(' ');
}
