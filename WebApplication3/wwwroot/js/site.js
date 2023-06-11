// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}



console.log(addNumbers(2, 3));
console.log(subtractNumbers(5, 2));
console.log(multiplyNumbers(4, 6));
console.log(divideNumbers(10, 2));
console.log(divideNumbers(8, 0)); // This will throw an error