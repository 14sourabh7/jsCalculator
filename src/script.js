var exp = "";
operatorCount = 0;

function numberInput(num) {
  exp += num;
  display(num);
}
function operatorInput(opr) {
  if (operatorCount == 0) {
    exp += opr;
    operatorCount++;
  } else {
    exp = eval(exp);
    display(exp);
    exp += opr;
    console.log(exp);
  }
}

function display(num) {
  document.getElementById("input").innerHTML = num;
}
function setzero() {
  exp = "";
  display(0);
}
function delDigit() {
  exp = exp.slice(0, -1);
  display(exp);
}
function Calculate() {
  display(eval(exp + 0));
}
