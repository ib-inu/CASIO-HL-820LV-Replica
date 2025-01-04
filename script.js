const display = document.getElementById('display');
let calculatorOn = true;
function appendToDisplay(value) {
    if (calculatorOn) {
        display.value += value;
    }
}
function clearDisplay() {
    if (calculatorOn) {
        display.value = "";
    }
}
function calculate() {
    if (calculatorOn && display.value) {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
}
function clearValue() {
    if (calculatorOn) {
        display.value = display.value.slice(0, -1);
    }
}

function toggleCalculator() {
    calculatorOn = !calculatorOn;
    display.value = calculatorOn ? '' : 'OFF';
}


document.addEventListener('DOMContentLoaded', () => {
    const acButton = document.getElementById('ac');
    let timer;

    acButton.addEventListener('mousedown', () => {
        timer = setTimeout(toggleCalculator, 1000);
    });

    acButton.addEventListener('mouseup', () => {
        clearTimeout(timer);
    });

    acButton.addEventListener('mouseleave', () => {
        clearTimeout(timer);
    });
});