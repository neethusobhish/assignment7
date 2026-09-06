let display = document.getElementById("display");
// Display the value entered by the user
function inputValue(value) {
    display.value += value;
}
// Clear the display
function clearDisplay() {
    display.value = "";
}
// Delete the last value
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
// Calculate the result using eval()
function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
