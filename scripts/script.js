const keyMap = {
  0: { id: "btn0", class: "nes-btn-primary-keyboard" },
  1: { id: "btn1", class: "nes-btn-primary-keyboard" },
  2: { id: "btn2", class: "nes-btn-primary-keyboard" },
  3: { id: "btn3", class: "nes-btn-primary-keyboard" },
  4: { id: "btn4", class: "nes-btn-primary-keyboard" },
  5: { id: "btn5", class: "nes-btn-primary-keyboard" },
  6: { id: "btn6", class: "nes-btn-primary-keyboard" },
  7: { id: "btn7", class: "nes-btn-primary-keyboard" },
  8: { id: "btn8", class: "nes-btn-primary-keyboard" },
  9: { id: "btn9", class: "nes-btn-primary-keyboard" },
  "+": { id: "btnp", class: "nes-btn-warning-keyboard" },
  "-": { id: "btnm", class: "nes-btn-warning-keyboard" },
  "*": { id: "btnx", class: "nes-btn-warning-keyboard" },
  "/": { id: "btnd", class: "nes-btn-warning-keyboard" },
  c: { id: "btnc", class: "nes-btn-error-keyboard" },
  C: { id: "btnc", class: "nes-btn-error-keyboard" },
  "Enter": { id: "btne", class: "nes-btn-success-keyboard" },
};

// Track all currently active keys
const activeKeys = new Set();

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const mapping = keyMap[key];
  
  if (mapping && !event.repeat && !activeKeys.has(key)) {
    const btn = document.getElementById(mapping.id);
    if (btn) {
      event.preventDefault(); // this is in the case of '/' key because the default behavior is to open quick search
      btn.click();
      btn.classList.add(mapping.class);
      activeKeys.add(key);
      
    }
  }
});

document.addEventListener("keyup", function (event) {
  const key = event.key;
  const mapping = keyMap[key];

  if (mapping && activeKeys.has(key)) {
    const btn = document.getElementById(mapping.id);
    if (btn) {
      btn.classList.remove(mapping.class);
    }
    activeKeys.delete(key);
  }
});

Object.keys(keyMap).forEach(key => {
  const btn = document.getElementById(keyMap[key].id);
  if (!btn) return;

  if (!isNaN(key)) {
    btn.addEventListener("click", () => appendNumber(key));
  } else if (["+", "-", "*", "/"].includes(key)) {
    btn.addEventListener("click", () => appendOperation(key));
  } else if (["c", "C"].includes(key)) {
    btn.addEventListener("click", clearDisplay);
  } else if (key === "Enter") {
    btn.addEventListener("click", calculate);
  }
});

function appendNumber(number) {
  document.getElementById("display").value += number;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendOperation(operator) {
  if (!["+", "-", "*", "/"].includes(document.getElementById("display").value.slice(-1))) {
    document.getElementById("display").value += operator;
  }
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result.toString();

  } catch (error) {
    document.getElementById("display").value = "Error";
  }
} 