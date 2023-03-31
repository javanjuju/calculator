/* eslint-disable no-useless-concat */
/* eslint-disable operator-assignment */
const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operands');
const workingArea = document.querySelector('#workingArea').children;// Where input is displayed. dived into three
const answer = document.querySelector('#answer');
const resultArea = document.querySelector('#resultArea');// Where results are displayed
const clearBtn = document.querySelector('#clear');
resultArea.textContent = 0;

let firstNumber = 0;// Holds number before operand
let secondNumber = 0;// Holds number after operand
let operandIndicator = 0;// Shows if an operand has been input
let workingChild = 0;
let result = 0;
// eslint-disable-next-line no-unused-vars
const operand = workingArea[1].textContent;

// Functions for different operations
const sum = (a, b) => a + b;
const difference = (a, b) => a - b;
const product = (a, b) => a * b;
const division = (a, b) => a / b;
const modulus = (a, b) => a % b;
const getAnswer = () => {
	const operand = workingArea[1].textContent;
	result = 0;
	firstNumber = Number(firstNumber);
	secondNumber = Number(secondNumber);
	if (operand === '+') {
		result = sum(firstNumber, secondNumber);
		result = String(result);
		resultArea.textContent = Number(result);
	} else if (operand === '-') {
		result = difference(firstNumber, secondNumber);
		result = String(result);
		resultArea.textContent = Number(result);
	} else if (operand === '*') {
		result = product(firstNumber, secondNumber);
		result = String(result);
		resultArea.textContent = Number(result);
	} else if (operand === '/') {
		result = division(firstNumber, secondNumber);
		result = String(result);
		resultArea.textContent = Number(result);
	} else if (operand === '%') {
		result = modulus(firstNumber, secondNumber);
		result = String(result);
		resultArea.textContent = Number(result);
	}
};

// When a button with class number is clicked it displays
numbers.forEach(number => {
	number.addEventListener('click', () => {
		if (operandIndicator === 0) {
			workingArea[workingChild].textContent = workingArea[workingChild].textContent + number.getAttribute('data-value');
			firstNumber = workingArea[0].textContent;
		} else if (operandIndicator === 1) {
			workingArea[workingChild].textContent = workingArea[workingChild].textContent + number.getAttribute('data-value');
			secondNumber = workingArea[2].textContent;
		}
	});
});

operands.forEach(operand => {
	operand.addEventListener('click', () => {
		if (operandIndicator === 0) {
			workingChild = 1;
			operandIndicator = 1;
			workingArea[workingChild].textContent = operand.getAttribute('data-value');
			workingChild = 2;
		} else if (operandIndicator === 1 && result === 0) {
			// If the operand has been input and result is zero the answer is calculated
			getAnswer();
		} else if (operandIndicator === 1 && result !== 0) {
			workingChild = 0;
			workingArea[workingChild].textContent = result;
			firstNumber = result;
			result = 0;
			workingChild = 1;
			operandIndicator = 1;
			workingArea[workingChild].textContent = operand.getAttribute('data-value');
			workingChild = 2;
			workingArea[workingChild].textContent = '';
			resultArea.textContent = 0;
			operandIndicator = 1;
		}
	});
});

answer.addEventListener('click', () => {
	getAnswer();
});
clearBtn.addEventListener('click', () => {
	firstNumber = 0;// Holds number before operand
	secondNumber = 0;// Holds number after operand
	operandIndicator = 0;// Shows if an operand has been input
	workingChild = 0;
	result = 0;
	// eslint-disable-next-line no-useless-concat
	workingArea[0].textContent = '' + '';
	workingArea[1].textContent = '' + '';
	workingArea[2].textContent = '' + '';
	resultArea.textContent = result;
});
