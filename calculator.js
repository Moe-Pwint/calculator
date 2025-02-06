let firstNum;
let operator;
let nextNum;
let numString;

const add = function(...args) {
    return args.reduce((total,current) => total + current, 0)
}
//console.log(add(3,4,5))

const subtract = function (...args) {
    return args.reduce((total,current) => total - current, args[0]*2)
}
//console.log(subtract(60,30,10))

const multiply = function(...args) {
    return args.reduce((total,current) => total*current, 1)
}
//console.log(multiply(3,4,5))

const divide = function(...args) {
    return args.reduce((total,current) => total/current, args[0]*args[0])
}
//console.log(divide(60,30))

const buttons = document.querySelector('#buttons')
const display = document.querySelector('#display')
const para = document.createElement('para')



const operate = function(operator,...args) {
    if (operator = '+') {
        return add(...args)
    } else if (operator = '-') {
        return subtract(...args)
    } else if (operator = '*') {
        return multiply(...args)
    } else if (operator = '/') {
        return divide(...args)
    }
}
//console.log(operate(3,4,add))

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
        numString += '+';
        break;
    case 'subtraction':
        para.textContent += '-';
        break;
    case 'multiplication':
        para.textContent += 'x';
        break;
    case 'division':
        para.textContent += '/';
        break;
    case 'clear':
        para.textContent = '';
        numString = '';
        break;
    case 'equation':
        para.textContent += '=';
        break;
    } display.appendChild(para)
    console.log(numString)
    
}


buttons.addEventListener("click", (printBtns))




/*
Create the functions that populate the display when you click the digit buttons. 
You should store the content of the display (the number) in a variable for use 
in the next step.

There needs to be an array of numbers and operator.
When an operator button is clicked, 
*/