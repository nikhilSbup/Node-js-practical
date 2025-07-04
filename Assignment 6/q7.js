// create a node.js application to check whether given name is directory or a file ,if it is a file, trucate the context after 7byte
const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\SBUP\\Desktop\\MCA2403082\\Node js\\Assignment 6\\buffer_output.txt';

fs.stat(filePath, (err, stats) => {
  if (err) {
    return console.error('Error accessing path:', err.message);
  }

  if (stats.isFile()) {
    console.log(`${filePath} is a file.`);

    // Read the file and truncate to first 7 bytes
    fs.readFile(filePath, (err, data) => {
      if (err) {
        return console.error('Error reading file:', err.message);
      }

      const truncated = data.slice(0, 7);

      fs.writeFile(filePath, truncated, (err) => {
        if (err) {
          return console.error('Error truncating file:', err.message);
        }
        console.log('File truncated to first 7 bytes successfully.');
      });
    });

  } else if (stats.isDirectory()) {
    console.log(`${filePath} is a directory.`);
  } else {
    console.log('Path is neither file nor directory.');
  }
});
