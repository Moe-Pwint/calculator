//step 1: Add a “backspace” button, so the user can undo their last input.
//step 2: Add keyboard support!
//step 3: Do a bit of CSS.

const numKeys = document.querySelector('#numKeys')
const ops = document.querySelector('#ops')
const display = document.querySelector('#display')
const para = document.querySelector('#displayNums')

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
            para.textContent = numString; 
            break;
        case 'two':
            numString += '2';
            para.textContent = numString; 
            break;
        case 'three':
            numString += '3';
            para.textContent = numString; 
            break;
        case 'four':
            numString += '4';
            para.textContent = numString; 
            break;
        case 'five':
            numString += '5';
            para.textContent = numString; 
            break;
        case 'six':
            numString += '6';
            para.textContent = numString; 
            break;
        case 'seven':
            numString += '7';
            para.textContent = numString; 
            break;
        case 'eight':
            numString += '8';
            para.textContent = numString; 
            break;
            case 'nine':
            numString += '9';
            para.textContent = numString; 
            break;
        case 'zero':
            numString += '0';
            para.textContent = numString; 
            break;
        case 'ce':
            let newStr = (numString);
            console.log(`newStr = ${newStr}`)
            if(newStr.length > 1) {
                numString = (newStr.slice(0,-1))
                para.textContent = numString;}
            if(newStr.length == 1) {
                para.textContent = 0;
                numString = '';
            }
            console.log(numString)
            break;
        case 'dot':
            if ((String(numString)).includes('.')) {
                break;
            } else {
            numString += '.';
            para.textContent = numString;
            break;
            }
        case 'clear':
            numString = '';
            para.textContent = '0';
            firstNum = undefined;
            nextNum = undefined;
        default:
            numString += '';
        }
}

//When ops keys (+-x/) are pressed,
function getOperations(e) {

    if (firstNum == undefined) {
        firstNum = numString;
    } else {
        nextNum = numString;
        //If both numbers are assigned, call the "operate()" function
        let answer = operate(currentOperator,firstNum,nextNum);
        
        //display the answer
        if (answer == Infinity) {
            para.textContent = 'NICE TRY';
            firstNum = undefined;
            nextNum = undefined;
            numString = '';
            
        } else if  (String(answer).length > 13) {
                let shortAns = (String(answer)).slice(0,13);
                console.log(answer)
                console.log(shortAns)
                nextNum = '';
                para.textContent = Number(shortAns);
        } else {
            firstNum = answer;
            numString = answer;
            nextNum = '';
            para.textContent = answer;
        }
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
