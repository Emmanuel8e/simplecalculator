function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function evaluateExpression() {
    const expression = document.getElementById('display').value;
    let result;
    try {
        result = eval(expression);
        if (isNaN(result)) {
            throw new Error('Invalid expression');
        }
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
}