// Define a variable named student and assign it an empty object
let student = {};

// Add properties to the student object for name, email, and age
student.name = "Your Name"; // Replace "Your Name" with your actual name
student.email = "your.email@example.com"; // Replace with your actual email
student.age = 25; // Replace with your actual age

// Log the name property of the student object to the console
console.log(student.name); // Output: Your Name

// Update the age property of the student object to some random value, say 10
student.age = 10;

// Log the age property of the student object to the console to see the updated property
console.log(student.age); // Output: 10

// Add a method called greet to the student object that logs a greeting message using the name property
student.greet = function() {
console.log(`Hello, my name is ${this.name}!`);
};

// Call the greet method to see the greeting message
student.greet(); // Output: Hello, my name is Your Name!
