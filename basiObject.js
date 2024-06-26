
let student = {};


student.name = "Your Name"; 
student.email = "your.email@example.com"; 
student.age = 25; 


console.log(student.name);


student.age = 10;


console.log(student.age); 


student.greet = function() {
console.log(`Hello, my name is ${this.name}!`);
};

student.greet();
