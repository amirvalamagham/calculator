const displayNumber = document.querySelector('h1');
const btns = document.querySelectorAll('button');
const clearBut = document.getElementById('clear');
const calculate = {
    '/': (firstNumber, SecNumber) => firstNumber / SecNumber,
    '*': (firstNumber, SecNumber) => firstNumber * SecNumber,
    '+': (firstNumber, SecNumber) => firstNumber + SecNumber,
    '-': (firstNumber, SecNumber) => firstNumber - SecNumber,
    '=': (firstNumber, SecNumber) => SecNumber
}
let firstValue = 0;
let waitForNextValue = false;
let operatorValue = '';


function sendValueToDisplay(value) {
    if (waitForNextValue) {
        displayNumber.textContent = value;
        waitForNextValue = false;
    }
    else {
        const inDisplay = displayNumber.textContent;
        displayNumber.textContent = inDisplay === '0' ? value : inDisplay + value;
    }
}


function decimal() {
    if (waitForNextValue) {
        return;
    }
    if (!displayNumber.textContent.includes('.')) {
        displayNumber.textContent = `${displayNumber.textContent}.`;
    }
}


function resertAll() {
    firstValue = 0;
    operatorValue = '';
    waitForNextValue = false;
    displayNumber.textContent = '0';
}


function operate(operator) {
    let number = Number(displayNumber.textContent);
    if (waitForNextValue && operatorValue) {
        operatorValue = operator;
        return;
    }
    if (!firstValue) {
        firstValue = number;
    }
    else {
        const calculataion = calculate[operatorValue](firstValue, number);
        displayNumber.textContent = calculataion;
        firstValue = calculataion;
    }
    waitForNextValue = true;
    operatorValue = operator;
}



btns.forEach((but) => {
    if (but.classList.length === 0) {
        but.addEventListener('click', () => {
            sendValueToDisplay(but.value);
        })
    }
    else if (but.classList.contains('operator')) {
        but.addEventListener('click', () => {
            operate(but.value);
        })
    }
    else if (but.classList.contains('decimal')) {
        but.addEventListener('click', decimal)
    }
})
clearBut.addEventListener('click', resertAll);