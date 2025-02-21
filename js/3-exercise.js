function parity() {
  let num = parseInt(document.getElementById("num").value); // Get the number input
  let result = document.getElementById("result"); // Get the result element

  if (isNaN(num)) { // Check if the number is a valid number
    result.innerHTML = "Please enter a valid number."; // Display an error message
    return; // Exit the function
  }

  result.innerHTML = num % 2 === 0 ? "Even" : "Odd"; // Check if the number is even or odd
}
