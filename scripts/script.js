// MY PREVIOUS CODE

// // BUTTON KEYBOARD BIND DECLERATIONS
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btn4 = document.getElementById("btn4");
// const btn5 = document.getElementById("btn5");
// const btn6 = document.getElementById("btn6");
// const btn7 = document.getElementById("btn7");
// const btn8 = document.getElementById("btn8");
// const btn9 = document.getElementById("btn9");
// const btn0 = document.getElementById("btn0");
// const btnp = document.getElementById("btnp");
// const btnm = document.getElementById("btnm");
// const btnx = document.getElementById("btnx");
// const btnd = document.getElementById("btnd");
// const btnc = document.getElementById("btnc");
// const btne = document.getElementById("btne");
// // BINDING KEYBOARD KEYS TO BUTTONS
// document.addEventListener("keydown", function (event) {
//   if (event.key === "1") {
//     btn1.click();
//     // ADDING AND REMOVING CLASS FOR VISUAL KEY PRESS
//     btn1.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn1.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "2") {
//     btn2.click();
//     btn2.classList.add("nes-btn-primary-keyboard"); 
//     document.addEventListener("keyup", function (event) {
//       btn2.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "3") {
//     btn3.click();
//     btn3.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn3.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "4") {
//     btn4.click();
//     btn4.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn4.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "5") {
//     btn5.click();
//     btn5.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn5.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "6") {
//     btn6.click();
//     btn6.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn6.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "7") {
//     btn7.click();
//     btn7.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn7.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "8") {
//     btn8.click();
//     btn8.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn8.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "9") {
//     btn9.click();
//     btn9.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn9.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "0") {
//     btn0.click();
//     btn0.classList.add("nes-btn-primary-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btn0.classList.remove("nes-btn-primary-keyboard");
//     });
//   } else if (event.key === "+") {
//     btnp.click();
//     btnp.classList.add("nes-btn-warning-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btnp.classList.remove("nes-btn-warning-keyboard");
//     });
//   }  else if (event.key === "-") {
//     btnm.click();
//     btnm.classList.add("nes-btn-warning-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btnm.classList.remove("nes-btn-warning-keyboard");
//     });
//   } else if (event.key === "*") {
//     btnx.click();
//     btnx.classList.add("nes-btn-warning-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btnx.classList.remove("nes-btn-warning-keyboard");
//     });
//   } else if (event.key === "d") {
//     btnd.click();
//     btnd.classList.add("nes-btn-warning-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btnd.classList.remove("nes-btn-warning-keyboard");
//     });
//   } else if (event.key === "c") {
//     btnc.click();
//     btnc.classList.add("nes-btn-error-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btnc.classList.remove("nes-btn-error-keyboard");
//     });
//   } else if (event.key === "=") {
//     btne.click();
//     btne.classList.add("nes-btn-success-keyboard");
//     document.addEventListener("keyup", function (event) {
//       btne.classList.remove("nes-btn-success-keyboard");
//     });
//   } 
// });

// Map keys to their corresponding button IDs and highlight classes
const keyMap = {
  "0": { id: "btn0", class: "nes-btn-primary-keyboard" },
  "1": { id: "btn1", class: "nes-btn-primary-keyboard" },
  "2": { id: "btn2", class: "nes-btn-primary-keyboard" },
  "3": { id: "btn3", class: "nes-btn-primary-keyboard" },
  "4": { id: "btn4", class: "nes-btn-primary-keyboard" },
  "5": { id: "btn5", class: "nes-btn-primary-keyboard" },
  "6": { id: "btn6", class: "nes-btn-primary-keyboard" },
  "7": { id: "btn7", class: "nes-btn-primary-keyboard" },
  "8": { id: "btn8", class: "nes-btn-primary-keyboard" },
  "9": { id: "btn9", class: "nes-btn-primary-keyboard" },
  "+": { id: "btnp", class: "nes-btn-warning-keyboard" },
  "-": { id: "btnm", class: "nes-btn-warning-keyboard" },
  "*": { id: "btnx", class: "nes-btn-warning-keyboard" },
  "d": { id: "btnd", class: "nes-btn-warning-keyboard" },
  "c": { id: "btnc", class: "nes-btn-error-keyboard" },
  "=": { id: "btne", class: "nes-btn-success-keyboard" }
};

// Track all currently active keys
const activeKeys = new Set();

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const mapping = keyMap[key];

  if (mapping && !event.repeat && !activeKeys.has(key)) {
    const btn = document.getElementById(mapping.id);
    if (btn) {
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
