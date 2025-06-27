// Create a Node js Appplication that performs following operations on buffer data
// concat , compare and Copy

const fs = require("fs")
const buffer1= Buffer("Hello")
const buffer2= Buffer("world")
// concat
const concat= Buffer.concat([buffer1,buffer2])
console.log("Concatenated Buffer:", concat.toString())

// Copy
const copy = Buffer.alloc(buffer1.length)
buffer1.copy(copy)
console.log("Copied Buffer:", copy.toString())

// compare
const comparison = Buffer.compare(buffer1, buffer2)
console.log("Comparison buffer:",comparison.toString())
