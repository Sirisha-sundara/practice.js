
function addNumbers(num1, num2) {
    return num1 + num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function divideNumbers(num1, num2) {
    if (num2 === 0) {
    return 'Error: Division by zero';
    }
    return num1 / num2;
}

function performArithmetic(num1, num2, operation) {
    return operation(num1, num2);
}

  console.log(performArithmetic(10, 5, addNumbers));        
  console.log(performArithmetic(10, 5, multiplyNumbers));   
  console.log(performArithmetic(10, 5, subtractNumbers));   
  console.log(performArithmetic(10, 5, divideNumbers));     

  console.log(performArithmetic(10, 0, divideNumbers));     
  console.log(performArithmetic(15, 3, addNumbers));       
  console.log(performArithmetic(7, 2, multiplyNumbers));    
  console.log(performArithmetic(9, 4, subtractNumbers));    
  console.log(performArithmetic(20, 4, divideNumbers));     
