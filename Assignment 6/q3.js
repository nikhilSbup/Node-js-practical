// Create a buffer with alphabet letters A to Z
const startCharCode = 'A'.charCodeAt(0); // 65
const endCharCode = 'Z'.charCodeAt(0);   // 90

// Create a buffer of size 26 (for 26 letters)
const buffer = Buffer.alloc(endCharCode - startCharCode + 1);

for (let i = 0; i <= endCharCode - startCharCode; i++) {
    buffer[i] = startCharCode + i;
}

// Print the alphabets from the buffer
console.log(buffer.toString()); // Outputs: ABCDEFGHIJKLMNOPQRSTUVWXYZ