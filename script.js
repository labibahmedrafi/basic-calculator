const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");
const backSpaceEl = document.querySelector(".backspace");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener('click', () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === 'C') {
            cleanResult();
        } else if (buttonValue === '=') {
            calculateResults();
        } else if (buttonValue === '⌫') {
            backSpace();
        } else {
            appendValue(buttonValue);
        }
    });
}

function cleanResult() {
    inputFieldEl.value = "";
}
function backSpace() {
    if (inputFieldEl.value.length > 0) {
        inputFieldEl.value = inputFieldEl.value.slice(0, -1);
    }
}
function calculateResults() {
    inputFieldEl.value = eval(inputFieldEl.value);
}
function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
}