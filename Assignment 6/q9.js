// write a program to read student.json ,parse it back to into a javascript object, display the contents.
const fs = require('fs');
const filePath = 'student.json';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  try {
    // Parse JSON data
    const student = JSON.parse(data);

    // Display the content
    console.log('Student Information:');
    console.log(`Name       : ${student.name}`);
    console.log(`Age        : ${student.age}`);
    console.log(`Department : ${student.department}`);
    console.log('Courses    :');
    student.courses.forEach((course, index) => {
      console.log(`  ${index + 1}. ${course}`);
    });
  } catch (parseErr) {
    console.error('Failed to parse JSON:', parseErr.message);
  }
});