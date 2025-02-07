// SOMETHING IS WRONG WITH THE 4 OPERATOR FUNCTIONS AND operate() FUNCTION!

const add = (a,b) => a - b;
const subtract = (a) => a.reduce((total,current) => total - current, a[0]*2)
const multiply = (a) => a.reduce((total,current) => total*current, 1)
const divide = (a) => a.reduce((total,current) => total/current, a[0]*a[0])

//console.log(divide([10,4]))

const buttons = document.querySelector('#buttons')
const display = document.querySelector('#display')
const equation = document.querySelector('#equation')
const para = document.createElement('para')

let firstNum;
let currentOperator;
let nextNum;
let numString;

//operate() returns one of the 4 operation functions (+-x/) depending on the chosen operator.
function operate(operator,array) {
    let answer;
    if (operator == '+') {
        answer =  add(array);
    } else if (operator == '-') {
        answer =  subtract(array);
    } else if (operator == '*') {
        answer =  multiply(array);
    } else if (operator == '/') {
        answer =  divide(array);
    } para.textContent += answer;
    display.appendChild(para);
}

/*
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector ('#nine')
const zero = document.querySelector('#zero')

const clear = document.querySelector('#clear')
const equation = document.querySelector('#equation')

const addition = document.querySelector('#addition')
const subtraction = document.querySelector('#subtraction')
const multiplication = document.querySelector('#multiplication')
const division = document.querySelector('#division')
*/

//printBtns(e) prints the pressed buttons on screen and also save them in the variable numString.
function printBtns(e) {
    
    switch (e.target.id) {
    case 'one':
        para.textContent += 1;
        numString += '1';
        break;
    case 'two':
        para.textContent += 2;
        numString += '2';
        break;
    case 'three':
        para.textContent += 3;
        numString += '3';
        break;
    case 'four':
        para.textContent += 4;
        numString += '4';
        break;
    case 'five':
        para.textContent += 5;
        numString += '5';
        break;
    case 'six':
        para.textContent += 6;
        numString += '6';
        break;
    case 'seven':
        para.textContent += 7;
        numString += '7';
        break;
    case 'eight':
        para.textContent += 8;
        numString += '8';
        break;
        case 'nine':
        para.textContent += 9;
        numString += '9';
        break;
    case 'zero':
        para.textContent += 0;
        numString += '0';
        break;
    case 'addition':
        para.textContent += '+';
        numString += ' + ';
        break;
    case 'subtraction':
        para.textContent += '-';
        numString += ' - ';
        break;
    case 'multiplication':
        para.textContent += 'x';
        numString += ' x ';
        break;
    case 'division':
        para.textContent += '/';
        numString += ' / '
        break;
    case 'clear':
        para.textContent = '';
        numString = '';
        break;
    case 'equation':
        para.textContent += '=';
        numString += '=';
        break;
    default:
        numString += '';
    } display.appendChild(para);
    return numString;
    
}

//When any of the buttons is pressed, printBtns function is called.
buttons.addEventListener("click", (printBtns))

//When the '=' button is pressed, calculation begins.
equation.addEventListener("click",() => {
    let newStr;
    if (numString.includes('undefined')) {
        newStr = numString.replace('undefined','')
    }

    let numArray = newStr.split(' ')
    let allOperators = ['+','-','x','/']

    numArray.forEach((element) => {

        if (allOperators.includes(element)) {
            currentOperator = element;
            numArray.splice((numArray.indexOf(element)),1)
        }
        return Number(element)
    }) 
    operate(currentOperator, numArray)
})


/*
Create the functions that populate the display when you click the digit buttons. 
You should store the content of the display (the number) in a variable for use 
in the next step.

There needs to be an array of numbers and operator.
When an operator button is clicked, 

//Calculation for 2 numbers only
equation.addEventListener("click",() => {

    let numArray = numString.split(' ')
    console.log(numArray);
    firstNum = numArray[0];
    currentOperator = numArray[1];
    nextNum = numArray[2];

})

*/

