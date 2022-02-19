var result = 0;
var operator = "+";
var num = "";
var disp = "n";

// main input and calculation function
function numberInput(numInp) {
  if (isNaN(numInp) && numInp != ".") {
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
      default:
        display(result);
    }
    operator = numInp;
    console.log(result);
    num = "";
    disp = "r";
    display(result);
  } else {
    num += numInp;
    display(num);
    disp = "n";
  }
}

// display function
function display(num) {
  document.getElementById("input").innerHTML = num;
}

// function for AC
function setzero() {
  result = 0;
  num = "";
  operator = "+";
  display(result);
}

// function to delete single digit
function delDigit() {
  if (disp == "r") {
    r = result % 10;
    result -= r;
    result /= 10;
    display(result);
  } else {
    num = num.slice(0, -1);
    display(num);
  }
}
