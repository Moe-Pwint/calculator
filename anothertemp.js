
//Keyboard numbers events
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
        if (newStr.length ==1) {
            numString = '';
        }
    }
    else if (k == 110) {
        if (((String(numString)).includes('.')) == false) {
            numString += '.';
            para.textContent = numString;
        }
    } else {
        numString += '';
    }
    console.log(`numString: ${numString}`)
}


//Keyboard ops keys events(+-x/)
function getKeyboardOps(event) {
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

    let k = event.keyCode
    if (k == 107) {
        currentOperator = '+';
    } else if (k == 109) {
        currentOperator = '-';
    } else if (k == 106) {
        currentOperator = 'x';
    } else if (k == 111) {
        currentOperator = '/';
    } else if (k == 187) {
        firstNum = undefined;
    }

    if (firstNum !== undefined) {
        numString = '';
        }
}

