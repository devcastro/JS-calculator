//return history value
function getHistory() {
  return document.getElementById("history").innerText;
}

// takes variable and prints to calc history

function printHistory(num) {
  document.getElementById("history").innerHTML = num;
}

// return display value
function getDisplay() {
  return document.getElementById("display").innerText;
}
// this func takes in a variable and prints to calc getDisplay

function printDisplay(num) {
  if (num == "") {
    document.getElementById("display").innerText = num;
  } else {
    document.getElementById("display").innerText = getFormattedNumber(num);
  }
}
// this function formats numbers with commas following english local string
function getFormattedNumber(num) {
  var n = Number(num);
  var Value = n.toLocaleString("en");
  return Value;
}

// this function will get rid of commas ( , , '') regex used for comma

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

// get number input and display on calc display
var number = document.getElementsByClassName("number");
// for loop
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var display = reverseNumberFormat(getDisplay());
    if (display != NaN) {
      display = display + this.id;
      printDisplay(display);
    }
  });
}

// get operator input and perform thhe task

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "AC") {
      printHistory("0");
      printDisplay("0");
    } else {
      var display = getDisplay();
      var history = getHistory();
      if (display != "") {
        display = reverseNumberFormat(display);
        display = display + this.id;
        history = history + display;
        printHistory(history);
        printDisplay("0");

        if (this.id == "=") {
          var history = history.replace(/[^-()\d/*+.]/g, "");
          history = history.substring(1);
          var solution = eval(history);
          printDisplay(solution);
          printHistory("0");
        }
      }
    }
  });
}
// light/dark mode input
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
