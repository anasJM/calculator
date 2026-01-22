function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, str, b) {
    switch (str) {
        case "+":
            return add(a, b);
            break;

        case "-":
            return substract(a, b);
            break;

        case "*":
            return multiply(a, b);
            break;

        case "/":
            return divide(a, b);
            break;
    
        default:
            console.log("select a valid operator!")
            break;
    }
}

let operator;
let firstNumber;
let secondNumber;
let array = [];
let operatorArray = ["+", "-", "*", "/"];
let operationCount = 0;

const clearButton = document.getElementById("btn-clear");
const display = document.getElementById("display");

const number0 = document.getElementById("btn-number-0");
const number1 = document.getElementById("btn-number-1");
const number2 = document.getElementById("btn-number-2");
const number3 = document.getElementById("btn-number-3");
const number4 = document.getElementById("btn-number-4");
const number5 = document.getElementById("btn-number-5");
const number6 = document.getElementById("btn-number-6");
const number7 = document.getElementById("btn-number-7");
const number8 = document.getElementById("btn-number-8");
const number9 = document.getElementById("btn-number-9");

const addButton = document.getElementById("btn-add");
const substractButton = document.getElementById("btn-substract");
const multiplyButton = document.getElementById("btn-multiply");
const divideButton = document.getElementById("btn-divide");
const equalButton = document.getElementById("btn-equal");

// clear the display

clearButton.addEventListener("click", () => {
    console.log(array);
    array = [];
    display.textContent = 0
});









//click event for numbers digits

number0.addEventListener("click", () => {
    array.push(0);
    console.log(array);
    
    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(0);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number1.addEventListener("click", () => {
    array.push(1);
    console.log(array);
    
    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(1);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number2.addEventListener("click", () => {
    array.push(2);
    console.log(array);

    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(2);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number3.addEventListener("click", () => {
    array.push(3);
    console.log(array);

    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(3);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number4.addEventListener("click", () => {
    array.push(4);
    console.log(array);
    
    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(4);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number5.addEventListener("click", () => {
    array.push(5);
    console.log(array);
    
    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(5);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number6.addEventListener("click", () => {
    array.push(6);
    console.log(array);
    
    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(6);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number7.addEventListener("click", () => {
    array.push(7);
    console.log(array);
    
    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(7);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number8.addEventListener("click", () => {
    array.push(8);
    console.log(array);
    
    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(8);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});

number9.addEventListener("click", () => {
    array.push(9);
    console.log(array);
    
    if (array.includes("+")) {
        display.textContent = array.slice(array.indexOf("+") + 1).join('');
    } else if (array.includes("-")) {
        display.textContent = array.slice(array.indexOf("-") + 1).join('');
    } else if (array.includes("*")) {
        display.textContent = array.slice(array.indexOf("*") + 1).join('');
    } else if (array.includes("/")) {
        display.textContent = array.slice(array.indexOf("/") + 1).join('');
    } else if (operationCount != 0) {
        array = [];
        array.push(9);
        operationCount = 0;
        display.textContent = array.join('');
        console.log(array);
    } else {
        display.textContent = array.join('');
    }
});









//click event for operatores digits

addButton.addEventListener("click", () => {
    if (array.includes("+") || array.includes("-") || array.includes("*") || array.includes("/")) {
        equalButton.click();
        array.push("+");
    }

    if (array[array.length-1] !== "+") {
        array.push("+");
        console.log(array);
    }
});

substractButton.addEventListener("click", () => {
    if (array.includes("+") || array.includes("-") || array.includes("*") || array.includes("/")) {
        equalButton.click();
        array.push("-");
    }

    if (array[array.length-1] !== "-") {
        array.push("-");
        console.log(array);
    }
});

multiplyButton.addEventListener("click", () => {
    if (array.includes("+") || array.includes("-") || array.includes("*") || array.includes("/")) {
        equalButton.click();
        array.push("*");
    }

    if (array[array.length-1] !== "*") {
        array.push("*");
        console.log(array);
    }
});

divideButton.addEventListener("click", () => {
    if (array.includes("+") || array.includes("-") || array.includes("*") || array.includes("/")) {
        equalButton.click();
        array.push("/");
    }

    if (array[array.length-1] !== "/") {
        array.push("/");
        console.log(array);
    }
});










//equal '=' button to calculate the numbers

equalButton.addEventListener("click", (event) => {
    let string;
    let numbersArray
    let result;

    if (event.isTrusted) {
        operationCount++;
    }

    if (array.includes("+")) {
        string = array.join('');
        numbersArray = string.split('+');
        firstNumber = Number(numbersArray[0]);
        secondNumber = Number(numbersArray[1]);
        operator = "+";
        result = operate(firstNumber, operator, secondNumber);
        array = [result];
        display.textContent = array[0];
        console.log(array);
    }

    if (array.includes("-")) {
        string = array.join('');
        numbersArray = string.split('-');
        firstNumber = Number(numbersArray[0]);
        secondNumber = Number(numbersArray[1]);
        operator = "-";
        result = operate(firstNumber, operator, secondNumber);
        array = [result];
        display.textContent = array[0];
        console.log(array);
    }

    if (array.includes("*")) {
        string = array.join('');
        numbersArray = string.split('*');
        firstNumber = Number(numbersArray[0]);
        secondNumber = Number(numbersArray[1]);
        operator = "*";
        result = operate(firstNumber, operator, secondNumber);
        array = [result];
        display.textContent = array[0];
        console.log(array);
    }

    if (array.includes("/")) {
        if (array[array.indexOf("/") + 1] == 0) {
            console.log("you can't divide by 0");
            display.textContent = "Error!"
            array = [];
        } else {
            string = array.join('');
            numbersArray = string.split('/');
            firstNumber = Number(numbersArray[0]);
            secondNumber = Number(numbersArray[1]);
            operator = "/";
            result = operate(firstNumber, operator, secondNumber);
            array = [result];
            display.textContent = array[0];
            console.log(array);
        }
    }
});