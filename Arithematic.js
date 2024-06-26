// Define the addNumbers function that takes two numbers and returns their sum
function addNumbers(num1, num2) {
    return num1 + num2;
}

  // Define the multiplyNumbers function that takes two numbers and returns their product
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

  // Define the subtractNumbers function that takes two numbers and returns the result of subtracting the second from the first
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

  // Define the divideNumbers function that takes two numbers and returns the result of dividing the first by the second, handling division by zero
function divideNumbers(num1, num2) {
    if (num2 === 0) {
    return 'Error: Division by zero';
    }
    return num1 / num2;
}

  // Define the performArithmetic function that accepts two numbers and a callback function
function performArithmetic(num1, num2, operation) {
    return operation(num1, num2);
}

  // Call performArithmetic with different pairs of numbers and each of the callback functions
  console.log(performArithmetic(10, 5, addNumbers));        // Output: 15
  console.log(performArithmetic(10, 5, multiplyNumbers));   // Output: 50
  console.log(performArithmetic(10, 5, subtractNumbers));   // Output: 5
  console.log(performArithmetic(10, 5, divideNumbers));     // Output: 2

  console.log(performArithmetic(10, 0, divideNumbers));     // Output: Error: Division by zero
  console.log(performArithmetic(15, 3, addNumbers));        // Output: 18
  console.log(performArithmetic(7, 2, multiplyNumbers));    // Output: 14
  console.log(performArithmetic(9, 4, subtractNumbers));    // Output: 5
  console.log(performArithmetic(20, 4, divideNumbers));     // Output: 5
