const number = require('lodash')
const n = [10,20,30,40,50]
console.log("Max is "+number.max(n))
console.log("Min is "+number.min(n))
console.log("Mean is "+number.mean(n))
console.log("round is "+number.round(number.mean(n),3))
console.log("Sum is "+number.sum(n))
console.log("time is "+number.now())                                            
console.log("time is "+new Date())

