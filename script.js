// Get the element with ID "result" and assign it to the variable "display"
var display = document.getElementById("result");

// Create a function named "addToDisplay" that takes a parameter "value"
function addToDisplay(value) {
	// Append the value of the parameter "value" to the value of the "display" variable
	display.value += value;
}

// Create a function named "calculate"
function calculate() {
	// Try to elevate the value of the "display" variable using the eval() function and assign it back to the "display" variable
	try {
		display.value = eval(display.value);
	} catch (error) {
		// If an error occur during the evaluation, assing the string "Error" to the "display"
		display.value = "Error";
	}
}

// Create a function named "clearDisplay"
function clearDisplay() {
	// Assign an empty string to the value of the "display" variable, effectively clearing it
	display.value = "";
}
