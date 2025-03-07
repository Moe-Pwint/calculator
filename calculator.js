//step 2: Add keyboard support!
//step 3: Do a bit of CSS.

const numKeys = document.querySelector('#numKeys')
const ops = document.querySelector('#ops')
const display = document.querySelector('#display')
const para = document.createElement('p')
para.textContent = 0;
display.appendChild(para); 
para.setAttribute('id','paraFont')

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

//When number buttons are pressed, 
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
            if(newStr.length <= 1) {
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
        console.log(`numString: ${numString}`)
}

//When ops buttons (+-x/) are pressed, 
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

    if (e.keyCode == 107) {
        currentOperator = '+';
    } else if (e.keyCode == 109) {
        currentOperator = '-';
    } else if (e.keyCode == 106) {
        currentOperator = 'x';
    } else if (e.keyCode == 111) {
        currentOperator = '/';
    } else if (e.keyCode == 187) {
        firstNum = undefined;
    }

    if (firstNum !== undefined) {
    numString = '';
    }
}

//Keyboard numbers events and Keyboard ops events(+-x/)
function printKeyboardNums(event) {
    let k = event.keyCode;
    if (k == 48 || k == 96) {
        numString += '0';
        para.textContent = numString;
    }
    else if (k == 49 || k == 97) {
        numString += '1';
        para.textContent = numString;
    }
    else if (k == 50 || k == 98) {
        numString += '2';
        para.textContent = numString;
    }
    else if (k == 51 || k == 99) {
        numString += '3';
        para.textContent = numString;
    }
    else if (k == 52 || k == 100) {
        numString += '4';
        para.textContent = numString;
    }
    else if (k == 53 || k == 101) {
        numString += '5';
        para.textContent = numString;
    }
    else if (k == 54 || k == 102) {
        numString += '6';
        para.textContent = numString;
    }
    else if (k == 55 || k == 103) {
        numString += '7';
        para.textContent = numString;
    }
    else if (k == 56 || k == 104) {
        numString += '8';
        para.textContent = numString;
    }
    else if (k == 57 || k == 105) {
        numString += '9';
        para.textContent = numString;
    }
    else if (k == 8) {
        let newStr = String(numString);
        numString = Number(newStr.slice(0,-1))
        para.textContent = numString;
        if (newStr.length <= 1) {
            para.textContent = 0;
            numString = '';
        }
    }
    else if (k == 110 || k == 190) {
        if (((String(numString)).includes('.')) == false) {
            numString += '.';
            para.textContent = numString;
        }
    } else if (k == 107) {
        getOperations(event);
    } else if (k == 109) {
        getOperations(event);
    } else if (k == 106) {
        getOperations(event);
    } else if (k == 111) {
        getOperations(event);
    } else if (k == 187) {
        getOperations(event);
    } else {
        para.textContent += '';
    }
    console.log(`numString: ${numString}`)
}

numKeys.addEventListener("click", (printBtns))
document.addEventListener("keydown", (printKeyboardNums))

ops.addEventListener("click", (getOperations))
