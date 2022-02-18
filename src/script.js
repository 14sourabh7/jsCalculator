var exp = "";
var calexp = "";
function display() {
  if (exp.length < 1) {
    document.getElementById("input").innerHTML = 0;
    return;
  }
  document.getElementById("input").innerHTML =
    exp.length > 13 ? exp[(0, 14)] : exp;
}
function setzero() {
  exp = "";
  display();
}
function delDigit() {
  exp = exp.slice(0, -1);
  display();
}
function concat(val) {
  exp += `${val}`;
  if (exp.length > 13) {
    exp = "Max Limit - 13";
  }
  display();
}
function Calculate() {
  exp = eval(exp + "+0");
  display();
}
