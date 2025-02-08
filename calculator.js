

const numKeys = document.querySelector('#numKeys')
const display = document.querySelector('#display')
const equation = document.querySelector('#equal')
const para = document.createElement('para')
const ops = document.querySelector('#ops')

let firstNum;
let currentOperator;
let nextNum;
let numString = '';
let contentTrack;

//IT WORKS. calculating operation functions
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

//IT WORKS. operate() returns one of the 4 operation functions (+-x/) depending on the chosen operator.
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

//----------------------------------------------------------------------

//When number keys are pressed, 
//Save the number set temporarily to numString
//And the set of number(numString) is displayed.
function printBtns(e) {
    //Meaning, if it's the very beginning of the event
    /*if (contentTrack !== '') {
        numString = '';
        contentTrack = '';
        console.log(`When numKeys are pressed, contentTrack is ${contentTrack}`)
    }*/

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
        case 'clear':
            numString = '';
            firstNum = undefined;
            nextNum = undefined;
            console.log(firstNum)
        default:
            numString += '';
        }
        para.textContent = numString; 
        display.appendChild(para);
        console.log(numString);
}

//When ops keys are pressed,
//If both numbers are assigned, call the "calculate()" function
//And then the result is the numString, 
//display it, 
//And Now, fistNum = result/numString; 
//Else if, 
    //if first number is undefined, first num = numString; 
    //Else, second num = numString;
function getOperations(e) {
    contentTrack = numString;
    console.log(`When ops are pressed, contentTrack is ${contentTrack}`)

    if (firstNum == undefined) {
        firstNum = numString;
        console.log(`firstNum is ${firstNum}`)
    } else {
        nextNum = numString;
        console.log(`firstNum is ${firstNum}`)
        console.log(`nextNum is ${nextNum}`)
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
    } 

    if (firstNum !== undefined && nextNum !== undefined) {
        let answer = operate(currentOperator,firstNum,nextNum);
        console.log(answer);
        firstNum = answer;
        numString = answer;

        para.textContent = answer; 
        display.appendChild(para);
        nextNum = '';

        console.log(`firstNum is ${firstNum}`)
        console.log(`numString is ${numString}`)
        console.log(`nextNum is ${nextNum}`)
    }
    
}


numKeys.addEventListener("click", (printBtns))

ops.addEventListener("click", (getOperations))

//equation.addEventListener("click", (calculate))

function calculate(){
    operate(currentOperator,firstNum,nextNum);
}
