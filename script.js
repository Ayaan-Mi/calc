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

function updateBase() {
  const num = document.getElementById('base').value;
  document.getElementById('num').innerHTML = num
}

function updateExponent() {
  const pow = document.getElementById('exponent').value;
  document.getElementById('pow').innerHTML = pow
}

function calculatePower() {
  const num = parseFloat(document.getElementById('base').value);
  const pow = parseFloat(document.getElementById('exponent').value);
  const ans = Math.pow(num , pow)
  document.getElementById('ans').innerHTML = ans;
}

function calculatert() {
    const number = parseFloat(document.getElementById('rt_num').value);
    const root = parseFloat(document.getElementById('root').value);

    if (isNaN(number) || isNaN(root)) {
        document.getElementById('sqrt_result').innerText = "Please enter valid numbers";
        return;
    }

    const result = Math.pow(number, 1 / root);

    document.getElementById('sqrt_result').innerText = result;
}