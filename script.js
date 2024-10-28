function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use the Function constructor for safer evaluation
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = 'Error';
    }
}
