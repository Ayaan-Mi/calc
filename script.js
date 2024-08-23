// calculator

let displayValue = "";

function number(num) {
  displayValue += num;
  UpdateDisplay();
}

function operator(oper) {
  displayValue += oper;
  UpdateDisplay();
}

function ShowResult() {
  try {
      let result = eval(displayValue);
      document.getElementById('display').innerText = result;
      displayValue = result.toString();
  } catch (error) {
      document.getElementById('display').innerText = 'Error';
      displayValue = '';
  }
}

function ClearDisplay() {
  displayValue = "";
  UpdateDisplay();
}

function UpdateDisplay() {
   document.getElementById('display').innerText = displayValue;
}

// Function to calculate power
function calculatePower() {
  const num = parseFloat(document.getElementById('base').value);
  const pow = parseFloat(document.getElementById('exponent').value);

  if (isNaN(num) || isNaN(pow)) {
      document.getElementById('power_result').innerText = "Please enter valid numbers";
      return;
  }

  const result = Math.pow(num, pow);
  document.getElementById('power_result').innerText = result;
}

// Function to calculate root
function calculateRoot() {
  const num = parseFloat(document.getElementById('rt_num').value);
  const root = parseFloat(document.getElementById('root').value);

  if (isNaN(num) || isNaN(root) || root <= 0) {
      document.getElementById('sqrt_result').innerText = "Please enter valid numbers and root greater than 0";
      return;
  }

  const result = Math.pow(num, 1 / root);
  document.getElementById('sqrt_result').innerText = result;
}
