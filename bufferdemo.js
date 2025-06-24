// const b2 = new Buffer.alloc(12,"Pune")
// console.log("b2 ="+b2);
// let name1 = new Buffer.alloc(10,"University")
// name1.copy(b2)
// console.log("b2 ="+b2)
// console.log("name =",name1.toString())
// b2.copy(name1)
// console.log("copied: ",b2.toString())

// // check whether two ubuffer is equal or not
// let name2 = Buffer.alloc(11, "Balaji")
// let name3 = Buffer.alloc(10, "Balaji")
// console.log(name2.toString())
// console.log(name3.toString())
// if (Buffer.from(name2).equals(name3))
//     console.log(name2+" and "+name3+" are equal")
// else
//     console.log(name2+ " and "+ name3+ " are not equal")


// //compare buffer
// const buf1= Buffer.from("balaji");
// const buf2= Buffer.from("balaji");
// const result= buf1.compare(buf2);
// if (result===0)
//     console.log(buf1+ " and "+buf2+"are equal")
// else if(result===-1)
//     console.log(buf1+ " is smaller than "+buf2)
// else
//     console.log(buf1+ " is larger than "+buf2)


// three buffer

const buffer1 = Buffer.alloc(100)
const buffer2 = Buffer.from("Balaji")
const buffer3 = Buffer.from([1, 2, 3, 4])
buffer1.write("I like Node Js")
const a= buffer1.toString("utf-8")
console.log("Buffer 1 : "+a)
console.log("Buffer 2 : "+buffer2)
console.log("Buffer 3 : "+buffer3)
console.log(Buffer.isBuffer(buffer1))
console.log("Length of Buffer 2: "+buffer2.length)
const bufferSrc = Buffer("MCA Div B class")
const bufferDest = Buffer(40);
//const bufferDest = Buffer("Node js is Programming...")
const Data =bufferDest.toString("utf-8")
console.log("Copied: "+Data)
const buffferOld = Buffer("School of Computer Studies")
bufferNew =buffferOld.slice(2,6)
console.log("sliced: "+bufferNew.toString())
//concatenate two buffer
const bufferOne = Buffer.from("Welcome")
const bufferTwo = Buffer.from("New year 2025")
const bufferThree = Buffer.concat([bufferOne, bufferTwo])
console.log("Concatenated :"+ bufferThree.toString())
