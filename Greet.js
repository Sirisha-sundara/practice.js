function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));   
console.log(greet("Sirisha")); 
console.log(greet());          

var greetFunction = function (name = "Alice") {
    return "Hello, " + name + "!";
}

console.log(greetFunction());       
console.log(greetFunction("Guest"));
const greetArrowFunction = (name = "Guest") => {
    return "Hello, " + name + "!";
};

console.log(greetArrowFunction());     
console.log(greetArrowFunction("Bob")); 
