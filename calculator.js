//Next step: 

const numKeys = document.querySelector('#numKeys')
const ops = document.querySelector('#ops')
const display = document.querySelector('#display')
//const equation = document.querySelector('#equation')
const para = document.createElement('para')

let firstNum;
let currentOperator;
let nextNum;
let numString = '';

//Calculating operation functions
const add = (a,b) => Number(a) + Number(b);
const subtract = (a,b) => a - b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

//Operate() returns one of the 4 operation functions (+-x/) depending on the chosen operator.
function operate(operator,numOne,numTwo) {
    if (operator == '+') {
        return add(numOne,numTwo);
    } else if (operator == '-') {
        return subtract(numOne,numTwo);
    } else if (operator == 'x') {
        return multiply(numOne,numTwo);
    } else if (operator == '/') {
        return divide(numOne,numTwo);
    }
}

//When number keys are pressed, 
//Save the number set temporarily to numString
//And the set of number(numString) is displayed.
function printBtns(e) {

    switch (e.target.id) {
        case 'one':
            numString += '1';
            break;
        case 'two':
            numString += '2';
            break;
        case 'three':
            numString += '3';
            break;
        case 'four':
            numString += '4';
            break;
        case 'five':
            numString += '5';
            break;
        case 'six':
            numString += '6';
            break;
        case 'seven':
            numString += '7';
            break;
        case 'eight':
            numString += '8';
            break;
            case 'nine':
            numString += '9';
            break;
        case 'zero':
            numString += '0';
            break;
        case 'clear':
            numString = '';
            firstNum = undefined;
            nextNum = undefined;
        default:
            numString += '';
        }
        para.textContent = numString; 
        display.appendChild(para);
}

//When ops keys (+-x/) are pressed,
function getOperations(e) {

    if (firstNum == undefined) {
        firstNum = numString;
    } else {
        nextNum = numString;
        //If both numbers are assigned, call the "operate()" function
        let answer = operate(currentOperator,firstNum,nextNum);
        firstNum = answer;
        numString = answer;
        //display the answer
        para.textContent = answer; 
        display.appendChild(para);
        nextNum = '';
    }

    switch (e.target.id) {
        case 'addition':
            currentOperator = '+';
            break;
        case 'subtraction':
            currentOperator = '-';
            break;
        case 'multiplication':
            currentOperator = 'x';
            break;
        case 'division':
            currentOperator = '/'
            break;
        case 'equation':
            firstNum = undefined;
    }

    if (firstNum !== undefined) {
    numString = '';
    }
}


numKeys.addEventListener("click", (printBtns))

ops.addEventListener("click", (getOperations))
