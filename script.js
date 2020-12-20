var first = 10;
var second = 5;
var third = 2;

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function doCalculation() {
    let result = divide(add(first, second), third);
    console.log(result);
}

doCalculation();

