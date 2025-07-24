// BUTTON 7 KEYBOARD BIND
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
// Add a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is '7'
  if (event.key === "7") {
    // Prevent the default action (e.g., submitting a form if the button is inside one)
    // event.preventDefault();
    // Trigger the button's click event
    btn7.click();
    btn7.classList.add("nes-btn-primary-keyboard");
    document.addEventListener("keyup", function (event) {
      btn7.classList.remove("nes-btn-primary-keyboard");
    });
  }
  else if (event.key === "8") {
    btn8.click();
    btn8.classList.add("nes-btn-primary-keyboard");
    document.addEventListener("keyup", function (event) {
      btn8.classList.remove("nes-btn-primary-keyboard");
    });
  }
    else if (event.key === "9") {
    btn9.click();
    btn9.classList.add("nes-btn-primary-keyboard");
    document.addEventListener("keyup", function (event) {
      btn9.classList.remove("nes-btn-primary-keyboard");
    });
  }
});

// BUTTON 8 KEYBOARD BIND

