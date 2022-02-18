var result = 0;
var operator = "+";

function numberInput(num) {
  switch (operator) {
    case "+":
      result += Number(num);
      break;
    case "-":
      result -= num;
      break;
    case "/":
      result /= num;
      break;
    case "*":
      result *= num;
      break;
  }

  display(result);
}
function operatorInput(opr) {
  operator = opr;
}

function display(num) {
  document.getElementById("input").innerHTML = num;
}
function setzero() {
  result = 0;
  operator = "+";
  display(result);
}
function delDigit() {
  r = result % 10;
  result -= r;
  result /= 10;
  display(result);
}
function Calculate() {
  display(result);
}
