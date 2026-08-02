// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
const MAX = 10; // Fixed maximum size

// ===== HELPER: READ A MATRIX =====
function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            let val = readlineSync.questionInt("Enter element [" + (i+1) + "][" + (j+1) + "]: ");
            row.push(val);
        }
        matrix.push(row);
    }
    return matrix;
}

// ===== HELPER: DISPLAY A MATRIX =====
function displayMatrix(matrix, label) {
    console.log("\n" + label + ":");
    for (let i = 0; i < matrix.length; i++) {
        let line = "";
        for (let j = 0; j < matrix[i].length; j++) {
            line += matrix[i][j] + " ";
        }
        console.log(line);
    }
}

// ===== PART A: TRANSPOSE =====
function transposeMatrix(matrix, rows, cols) {
    let transposed = [];
    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }
    // Show original and transposed side-by-side like example
    console.log("\nOriginal Matrix:\tTransposed Matrix:");
    for (let i = 0; i < Math.max(rows, cols); i++) {
        let origLine = "";
        if (i < rows) {
            for (let j = 0; j < cols; j++) {
                origLine += matrix[i][j] + " ";
            }
        }
        let transLine = "";
        if (i < cols) {
            for (let j = 0; j < rows; j++) {
                transLine += transposed[i][j] + " ";
            }
        }
        console.log(origLine + "\t\t" + transLine);
    }
}

// ===== PART B: ADD TWO MATRICES =====
function addMatrices(a, b, rows, cols) {
    let sum = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(a[i][j] + b[i][j]);
        }
        sum.push(row);
    }
    displayMatrix(sum, "Sum of Matrices");
}

// ===== PART C: MULTIPLY TWO MATRICES =====
function multiplyMatrices(a, b, m, n, p) {
    if (n !== p) {
        console.log("\nError: Columns of A must equal rows of B!");
        return;
    }
    let product = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < p; j++) {
            let total = 0;
            for (let k = 0; k < n; k++) {
                total += a[i][k] * b[k][j];
            }
            row.push(total);
        }
        product.push(row);
    }
    displayMatrix(product, "Product of Matrices");
}

// ===== MAIN MENU =====
function main() {
    console.log("===== MATRIX OPERATIONS =====");
    console.log("1. Transpose a Matrix");
    console.log("2. Add Two Matrices");
    console.log("3. Multiply Two Matrices");
    let choice = readlineSync.questionInt("Enter your choice (1-3): ");
    
    if (choice === 1) {
        console.log("\n=== MATRIX TRANSPOSE ===");
        let rows = readlineSync.questionInt("Enter rows: ");
        let cols = readlineSync.questionInt("Enter columns: ");
        if (rows > MAX || cols > MAX) {
            console.log("Error: Max size is " + MAX + "x" + MAX);
            return;
        }
        let mat = readMatrix(rows, cols);
        transposeMatrix(mat, rows, cols);
    }
    else if (choice === 2) {
        console.log("\n=== MATRIX ADDITION ===");
        let rows = readlineSync.questionInt("Enter rows: ");
        let cols = readlineSync.questionInt("Enter columns: ");
        if (rows > MAX || cols > MAX) {
            console.log("Error: Max size is " + MAX + "x" + MAX);
            return;
        }
        console.log("\nMatrix A:");
        let a = readMatrix(rows, cols);
        console.log("\nMatrix B:");
        let b = readMatrix(rows, cols);
        addMatrices(a, b, rows, cols);
    }
    else if (choice === 3) {
        console.log("\n=== MATRIX MULTIPLICATION ===");
        let m = readlineSync.questionInt("Matrix A - rows: ");
        let n = readlineSync.questionInt("Matrix A - columns: ");
        let p = readlineSync.questionInt("Matrix B - columns: ");
        if (m > MAX || n > MAX || p > MAX) {
            console.log("Error: Max size is " + MAX + "x" + MAX);
            return;
        }
        console.log("\nMatrix A:");
        let a = readMatrix(m, n);
        console.log("\nMatrix B:");
        let b = readMatrix(n, p);
        multiplyMatrices(a, b, m, n, p);
    }
    else {
        console.log("Invalid choice!");
    }
}

// Run the program
main();
      
