// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// ===== CALCULATE SUM =====
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// ===== CALCULATE AVERAGE =====
function calculateAverage(sum, count) {
    return sum / count;
}

// ===== FIND MAXIMUM =====
function findMax(numbers) {
    let maxVal = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxVal) {
            maxVal = numbers[i];
        }
    }
    return maxVal;
}

// ===== FIND MINIMUM =====
function findMin(numbers) {
    let minVal = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minVal) {
            minVal = numbers[i];
        }
    }
    return minVal;
}

// ===== MAIN FUNCTION =====
function main() {
    let n = readlineSync.questionInt("How many numbers? ");
    
    // Validate N must be positive
    if (n <= 0) {
        console.log("Error: Number must be positive!");
        return;
    }
    
    let numbers = [];
    
    // Read each number
    for (let i = 0; i < n; i++) {
        let num = readlineSync.questionInt("Enter number " + (i + 1) + ": ");
        numbers.push(num);
    }
    
    // Calculate everything
    let sum = calculateSum(numbers);
    let avg = calculateAverage(sum, n);
    let maxVal = findMax(numbers);
    let minVal = findMin(numbers);
    
    // Display results
    console.log("\nResults:");
    console.log("Sum:      " + sum);
    console.log("Average:  " + avg);
    console.log("Maximum:  " + maxVal);
    console.log("Minimum:  " + minVal);
}

// Run the program
main();


