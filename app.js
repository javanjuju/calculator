const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operands');
const workingArea = document.querySelector('#workingArea').children;//where input is displayed. dived into three
const answer = document.querySelector('#answer');
const resultArea = document.querySelector('#resultArea');//where results are displayed
const clearBtn = document.querySelector('#clear');
resultArea.textContent = 0;

let firstNumber = 0;//holds number before operand
let secondNumber = 0;//holds number after operand
let operandIndicator = 0;//shows if an operand has been input
let workingChild = 0;
let result = 0;
let operand = workingArea[1].textContent;

//functions for different operations 
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
let getAnswer = ()=>{
    let operand = workingArea[1].textContent
    result = 0;
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
}

//When a button with class number is clicked it displays
numbers.forEach((number)=>{
    number.addEventListener('click',e=>{
        if(operandIndicator==0){
            workingArea[workingChild].textContent = workingArea[workingChild].textContent + number.getAttribute('data-value');
            firstNumber = workingArea[0].textContent;
        }
        else if(operandIndicator==1){
            workingArea[workingChild].textContent = workingArea[workingChild].textContent + number.getAttribute('data-value');
            secondNumber = workingArea[2].textContent;
        }
        
    })
})

operands.forEach(operand=>{
    operand.addEventListener('click',e=>{
        if(operandIndicator == 0){
            workingChild=1;
            operandIndicator=1;
            workingArea[workingChild].textContent = operand.getAttribute('data-value');
            workingChild = 2;
        }
        else if(operandIndicator==1 && result==0){
            //if the operand has been input and result is zero the answer is calculated
            getAnswer();
        }
        else if(operandIndicator==1 && result!=0){
            workingChild = 0;
            workingArea[workingChild].textContent = result;
            firstNumber = result;
            result = 0;
            workingChild=1;
            operandIndicator=1;
            workingArea[workingChild].textContent = operand.getAttribute('data-value');
            workingChild = 2;
            workingArea[workingChild].textContent = '';
            resultArea.textContent = 0;
            operandIndicator =1;
        }
    })
})

answer.addEventListener('click',e=>{
    getAnswer();
})
clearBtn.addEventListener('click',e=>{
    window.location.reload();
})


