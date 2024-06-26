function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));   // Output: Hello, Alice !
console.log(greet("Sirisha")); // Output: Hello, Sirisha !
console.log(greet());          // Output: Hello, Guest !

var greetFunction = function (name = "Alice") {
    return "Hello, " + name + "!";
}

console.log(greetFunction());       // Output: Hello, Alice !
console.log(greetFunction("Guest"));// Output: Hello, Guest !

const greetArrowFunction = (name = "Guest") => {
    return "Hello, " + name + "!";
};

console.log(greetArrowFunction());      // Output: Hello, Guest !
console.log(greetArrowFunction("Bob")); // Output: Hello, Bob !
