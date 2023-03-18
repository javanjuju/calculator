const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operands');
const workingArea = document.querySelector('#workingArea').children; 
const answer = document.querySelector('#answer');
const resultArea = document.querySelector('#resultArea');

let firstNumber = 0;
let secondNumber = 0;
let operandIndicator = 0;
let workingChild = 0;
let operand = workingArea[1].textContent;

let sum = (a,b)=>{
    return a+b;
}
let difference = (a,b)=>{
    return a-b;
}
let product = (a,b)=>{
    return a*b;
}
let division = (a,b)=>{
    return a/b;
}
let modulus = (a,b)=>{
    return a%b;
}

numbers.forEach((number)=>{
    number.addEventListener('click',e=>{
        if(operandIndicator==0){
            workingArea[workingChild].textContent = workingArea[workingChild].textContent + number.getAttribute('data-value');
            firstNumber = workingArea[0].textContent;
            console.log(`firstNumber ${firstNumber}`);
            console.log(`secondNumber ${secondNumber}`);
        }
        else if(operandIndicator==1){
            workingArea[workingChild].textContent = workingArea[workingChild].textContent + number.getAttribute('data-value');
            secondNumber = workingArea[2].textContent;
            console.log(`firstNumber ${firstNumber}`);
            console.log(`secondNumber ${secondNumber}`);
        }
        
    })
})

operands.forEach(operand=>{
    operand.addEventListener('click',e=>{
        workingChild=1;
        operandIndicator=1;
        workingArea[workingChild].textContent = operand.getAttribute('data-value');
        workingChild = 2;
        console.log(`firstNumber ${firstNumber}`);
        console.log(`secondNumber ${secondNumber}`);
    })
})

answer.addEventListener('click',e=>{
    let operand = workingArea[1].textContent
    let result = 0;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if(operand== '+'){
        result = sum(firstNumber,secondNumber);
        result = String(result);
        resultArea.textContent=+result;
    }
    else if(operand== '-'){
        result = difference(firstNumber,secondNumber);
        result = String(result);
        resultArea.textContent=+result;
    }
    else if(operand== '*'){
        result = product(firstNumber,secondNumber);
        result = String(result);
        resultArea.textContent=+result;
    }
    else if(operand== '/'){
        result = division(firstNumber,secondNumber);
        result = String(result);
        resultArea.textContent=+result;
    }
    else if(operand== '%'){
        result = modulus(firstNumber,secondNumber);
        result = String(result);
        resultArea.textContent=+result;
    }
})


