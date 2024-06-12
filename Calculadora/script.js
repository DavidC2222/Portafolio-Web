const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let currentOperator = "";

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function handleOperator(operator) {
  if (currentOperator !== "") {
    calculate();
  }
  currentOperator = operator;
  currentInput += operator;
  display.value = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
    currentOperator = "";
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  display.value = "";
}

function handleScientificFunction(func) {
  try {
    const result = Math[func](eval(currentInput));
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (!isNaN(value) || value === ".") {
      appendToDisplay(value);
    } else if (["+", "-", "*", "/", "%"].includes(value)) {
      handleOperator(value);
    } else if (value === "=") {
      calculate();
    } else if (value === "C") {
      clearDisplay();
    } else if (["sin", "cos", "tan", "log"].includes(value)) {
      handleScientificFunction(value);
    } else if (value === "√") {
      handleScientificFunction("sqrt");
    } else if (value === "^") {
      appendToDisplay("**");
    } else if (value === "π") {
      appendToDisplay(Math.PI);
    } else if (value === "e") {
      appendToDisplay(Math.E);
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const keyMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    ".": ".",
    "=": "=",
    Enter: "=",
    Backspace: "C",
    Escape: "C",
    "(": "(",
    ")": ")",
    "^": "^",
    s: "sin",
    c: "cos",
    t: "tan",
    l: "log",
    p: "π",
    e: "e",
    "%": "%",
  };

  if (key in keyMap) {
    simulateButtonClick(keyMap[key]);
  }
});
