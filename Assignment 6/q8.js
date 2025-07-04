//create an object with some sample data(eg,student info),convert it into JSON and save it to a file named student.json
const fs = require('fs');

// Sample student object
const student = {
  id: 101,
  name: "Alice Johnson",
  age: 20,
  courses: ["Math", "Physics", "English"],
};

// Convert object to JSON string
const jsonData = JSON.stringify(student, null, 2); 

// Write JSON string to student.json file
fs.writeFile('student.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('student.json file has been saved.');
  }
});
