function getNumbers() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    return [num1, num2];
}

function displayResult(result) {
    document.getElementById("result").innerText = "Result: " + result;
}

function addNumbers() {
    let [num1, num2] = getNumbers();
    displayResult(num1 + num2);
}

function subtractNumbers() {
    let [num1, num2] = getNumbers();
    displayResult(num1 - num2);
}

function multiplyNumbers() {
    let [num1, num2] = getNumbers();
    displayResult(num1 * num2);
}

function divideNumbers() {
    let [num1, num2] = getNumbers();
    if (num2 === 0) {
        displayResult("Cannot divide by zero");
    } else {
        displayResult(num1 / num2);
    }
}

function percentage() {
    let [num1, num2] = getNumbers();
    displayResult((num1 / num2) * 100 + "%");
}

function squareRoot() {
    let num1 = parseFloat(document.getElementById("number1").value);
    displayResult(Math.sqrt(num1));
}

function squareNumber() {
    let num1 = parseFloat(document.getElementById("number1").value);
    displayResult(Math.pow(num1, 2));
}