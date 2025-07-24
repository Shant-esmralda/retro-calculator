// BUTTON 7 KEYBOARD BIND
const btn7 = document.getElementById("btn7");
// Add a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is '7'
  if (event.key === "7") {
    // Prevent the default action (e.g., submitting a form if the button is inside one)
    // event.preventDefault();
    // Trigger the button's click event
    btn7.classList.add("nes-btn-primary-keyboard");
    btn7.click();
    document.addEventListener("keyup", function (event) {
      btn7.classList.remove("nes-btn-primary-keyboard");
    });
  }
});

// BUTTON 8 KEYBOARD BIND
const btn8 = document.getElementById("btn8");
// Add a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is '7'
  if (event.key === "8") {
    // Prevent the default action (e.g., submitting a form if the button is inside one)
    // event.preventDefault();
    // Trigger the button's click event
    btn8.classList.add("nes-btn-primary-keyboard");
    btn8.click();
    document.addEventListener("keyup", function (event) {
      btn8.classList.remove("nes-btn-primary-keyboard");
    });
  }
});
