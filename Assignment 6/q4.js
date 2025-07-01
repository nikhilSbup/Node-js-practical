//create a node js application to perform the below operations:
    //create, read , write, append, delete
const fs = require('fs');
const filePath = 'example.txt';

// 1Create or Write a new file (will overwrite if it exists)
fs.writeFileSync(filePath, 'Initial content.\n');
console.log('File created and written.');

// Read the file
const content = fs.readFileSync(filePath, 'utf-8');
console.log('File content:\n', content);

// Append content to the file
fs.appendFileSync(filePath, 'Appended content.\n');
console.log('Content appended.');

// Read again to confirm appending
const updatedContent = fs.readFileSync(filePath, 'utf-8');
console.log('Updated file content:\n', updatedContent);

//  Delete the file
fs.unlinkSync(filePath);
console.log('File deleted.');