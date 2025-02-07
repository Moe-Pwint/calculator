const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

const buttons = document.querySelector('#buttons')
const display = document.querySelector('#display')
const equation = document.querySelector('#equal')
const para = document.createElement('para')
const ops = document.querySelector('.ops')

let firstNum;
let currentOperator;
let nextNum;
let numString = '';

//operate() returns one of the 4 operation functions (+-x/) depending on the chosen operator.
function operate(operator,numOne,numTwo) {
    if (operator == '+') {
        return add(numOne,numTwo);
    } else if (operator == '-') {
        return subtract(numOne,numTwo);
    } else if (operator == '*') {
        return multiply(numOne,numTwo);
    } else if (operator == '/') {
        return divide(numOne,numTwo);
    }
}


function printBtns(e) {
    if (firstNum !== undefined) {
        numString = '';
    }
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
        default:
            numString += '';
        }
        para.textContent = numString; 
        display.appendChild(para);
        //console.log(numString);
}

function getOperations(e) {

    if (firstNum == undefined) {
        firstNum = numString;
        console.log(`firstNum is ${firstNum}`)
    } else {
        nextNum = numString;
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
        case 'clear':
            numString = '';
            break;
    } 
    
}


buttons.addEventListener("click", (printBtns))
ops.addEventListener("click", (getOperations))
/*equation.addEventListener("click", () => {
    console.log( operate(currentOperator,firstNum,nextNum))
})
    */