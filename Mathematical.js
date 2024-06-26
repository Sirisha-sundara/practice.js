// Define the doubleNumber function that takes a number and returns its double
function doubleNumber(number) {
    return number * 2;
}

  // Define the squareNumber function that takes a number and returns its square
function squareNumber(number) {
    return number * number;
}

  // Define the incrementNumber function that takes a number and returns the number incremented by one
function incrementNumber(number) {
    return number + 1;
}

  // Define the performOperation function that accepts a number and a callback function
function performOperation(num, operation) {
    return operation(num);
}

  // Call performOperation with a number and each of the callback functions
  console.log(performOperation(5, doubleNumber)); // Output: 10
  console.log(performOperation(5, squareNumber)); // Output: 25
  console.log(performOperation(5, incrementNumber)); // Output: 6

  console.log(performOperation(10, doubleNumber)); // Output: 20
  console.log(performOperation(10, squareNumber)); // Output: 100
  console.log(performOperation(10, incrementNumber)); // Output: 11
