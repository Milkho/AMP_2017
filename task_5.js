"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log( calcMultiplication(arr, 0) );

function calcMultiplicatione(arr, index) {
	if(arr[index] == 0) {
		if(index == 0) {
			return 0;
    }
		return 1;
	}
  
	if (index == arr.length - 1) {
		return arr[index];
	}
  
	return arr[index] * calcMultiplication(arr, ++index);
}
