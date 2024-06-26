
function doubleNumber(number) {
    return number * 2;
}

 
function squareNumber(number) {
    return number * number;
}

 
function incrementNumber(number) {
    return number + 1;
}

 
function performOperation(num, operation) {
    return operation(num);
}

  
  console.log(performOperation(5, doubleNumber));
  console.log(performOperation(5, squareNumber));
  console.log(performOperation(5, incrementNumber));

  console.log(performOperation(10, doubleNumber)); 
  console.log(performOperation(10, squareNumber)); 
  console.log(performOperation(10, incrementNumber)); 
