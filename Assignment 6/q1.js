// write a node js application to create, write,Modify a buffer and display the content.
const fs= require("fs")

// Step 1: Create a buffer from a string
let buffer = Buffer.from("Hello, Buffer!");

// Step 2: Display the original buffer content
console.log("Original Buffer:", buffer.toString());

// Step 3: Modify the buffer (change 'Hello' to 'Hiya!')
buffer.write("Heya!");

// Step 4: Display the modified buffer content
console.log("Modified Buffer:", buffer.toString());

// Save buffer content to a file
fs.writeFileSync("buffer_output.txt", buffer);

// Step 5: Read the content back from the file to verify
const readBuffer = fs.readFileSync("buffer_output.txt");
console.log("Read from File:", readBuffer.toString());