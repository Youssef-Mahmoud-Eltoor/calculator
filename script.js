let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearResult() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay('');
}

function calculate() {
  if (!operation || currentInput === '') return;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById('result').value = value;
}
