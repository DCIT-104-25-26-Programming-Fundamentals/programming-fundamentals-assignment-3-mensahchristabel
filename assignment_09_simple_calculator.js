// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// ===== ADDITION =====
function add(a, b) { return a + b; }

// ===== SUBTRACTION =====
function subtract(a, b) { return a - b; }

// ===== MULTIPLICATION =====
function multiply(a, b) { return a * b; }

// ===== DIVISION =====
function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return (a / b).toFixed(2);
}

// ===== MODULUS =====
function modulus(a, b) {
    if (b === 0) return "Error: Cannot mod by zero";
    return a % b;
}

// ===== EXPONENTIATION =====
function power(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

// ===== MAIN MENU =====
function main() {
    while (true) {
        console.log("\n==============================");
        console.log("      SIMPLE CALCULATOR        ");
        console.log("==============================");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Modulus");
        console.log("6. Exponentiation");
        console.log("7. Quit");
        
        let choice = readlineSync.questionInt("Select an operation (1-7): ");
        
        if (choice === 7) {
            console.log("👋 Goodbye!");
            break;
        }
        
        if (choice >= 1 && choice <= 6) {
            let num1 = readlineSync.questionInt("Enter first number: ");
            let num2 = readlineSync.questionInt("Enter second number: ");
            let result, symbol;
            
            if (choice === 1) { result = add(num1, num2); symbol = "+"; }
            else if (choice === 2) { result = subtract(num1, num2); symbol = "-"; }
            else if (choice === 3) { result = multiply(num1, num2); symbol = "*"; }
            else if (choice === 4) { result = divide(num1, num2); symbol = "/"; }
            else if (choice === 5) { result = modulus(num1, num2); symbol = "%"; }
            else if (choice === 6) { result = power(num1, num2); symbol = "**"; }
            
            console.log("\nResult: " + num1 + " " + symbol + " " + num2 + " = " + result);
        } else {
            console.log("❌ Invalid choice! Enter 1-7.");
        }
    }
}

// Run the program
main();
              

