// Get the button element
const button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Show an alert
  alert("You clicked the button!");

  // Disable the button after the user clicks "OK" in the alert
  button.disabled = true;
});