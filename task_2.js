'use strict'

const bills = [5, 10, 20];
const price = 65;

console.log( calcVariants(price, bills.length - 1) );


function calcVariants(price, index) {
if (price < 0 || index < 0) {
  return 0;
}
if (price == 0 || index == 0){
  return 1;
}

return calcVariants(price, index - 1) + 
       calcVariants(price - bills[index], index);
}
