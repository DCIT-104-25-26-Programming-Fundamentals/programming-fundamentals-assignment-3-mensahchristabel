// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// ===== PART A: PRINT FIRST N TERMS =====
function printFibonacci(n) {
    if (n <= 0) {
        console.log("Please enter a positive number.");
        return;
    }
    
    let fib = [];
    if (n >= 1) fib.push(0);
    if (n >= 2) fib.push(1);
    
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    console.log("Fibonacci sequence: " + fib.join(" "));
}

// ===== PART B: CHECK IF NUMBER IS FIBONACCI =====
function isFibonacciNumber(num) {
    let a = 0, b = 1;
    if (num === a || num === b) return true;
    
    while (b < num) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b === num;
}

// ===== MAIN MENU =====
function main() {
    console.log("===== FIBONACCI GENERATOR =====");
    console.log("1. Print first N terms");
    console.log("2. Check if a number is Fibonacci");
    
    let choice = readlineSync.questionInt("Enter your choice (1-2): ");
    
    if (choice === 1) {
        let n = readlineSync.questionInt("How many terms? ");
        printFibonacci(n);
    }
    else if (choice === 2) {
        let num = readlineSync.questionInt("Enter a number to check: ");
        if (isFibonacciNumber(num)) {
            console.log(num + " is a Fibonacci number.");
        } else {
            console.log(num + " is NOT a Fibonacci number.");
        }
    }
    else {
        console.log("Invalid choice!");
    }
}

// Run the program
main();


