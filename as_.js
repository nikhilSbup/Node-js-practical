const number = require('lodash')
let n = [1,2,2,3,4,4,5,6,7,8,22]
console.log("unique number"+number.uniq(n))
console.log("even number is "+number.filter(n , n => n % 2 == 0));
