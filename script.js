
// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform calculation
function calculate() {
    var displayValue = document.getElementById('display').value;
    var result;
    try {
        result = eval(displayValue);
        if (result === Infinity || isNaN(result)) {
            throw new Error('Invalid operation');
        }
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
}
function backspace() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}