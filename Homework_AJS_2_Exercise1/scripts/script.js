// Homework 2

// ## Exercise 1

// Function 1: Function that takes a number through a parameter and returns how many digits that number has
function getDigitCount(number) {
  let count = 0;
  let num = Math.abs(number);
  // If the number is 0, return 1 since it has 1 digit
  if (num === 0) {
    return 1;
  }
  // Count digits
  while (num >= 1) {
    num = num / 10;
    count++;
  }
  return count;
}

// Function 2: Function that takes a number through a parameter and returns if its even or odd
function evenOrOddNumber(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

// Function 3: Function that takes a number through a parameter and returns if its positive or negative
function positiveOrNegativeNumber(number) {
  if (number >= 0) {
    return "Positive";
  }
  return "Negative";
}

// Function that calls the above functions and logs the results
function getNumberStats(number) {
  // Checking if the number is valid (not empty or undefined)
  if (number === undefined || number === "" || isNaN(number)) {
    console.log("Invalid input! Please provide a valid number.");
    return;
  }
  const numOfDigits = getDigitCount(number);
  const oddEvenCheck = evenOrOddNumber(number);
  const numberType = positiveOrNegativeNumber(number);

  console.log(numOfDigits + " Digits, " + oddEvenCheck + ", " + numberType);
}
getNumberStats(-25);
getNumberStats(5);
getNumberStats(100);
getNumberStats(0);
getNumberStats("");
getNumberStats(undefined);
getNumberStats("abc");
