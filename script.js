
tailwind.config = {
theme: {
extend: {
fontFamily: {
pacifico: ["Pacifico", "cursive"]
            }
        }
    }
}

let currentIndex = 0;
const inputs = document.querySelectorAll(".passcode-input");
let enteredPasscode = "";

function enterDigit(digit) {
    if (currentIndex < inputs.length) {
        inputs[currentIndex].value = digit;
        enteredPasscode += digit;
        currentIndex++;
    }

    if (currentIndex === inputs.length) {
        checkPasscode();
    }
}

function deleteDigit() {
    if (currentIndex > 0) {
        currentIndex--;
        inputs[currentIndex].value = "";
        enteredPasscode = enteredPasscode.slice(0, -1);
    }
}

function checkPasscode() {
    const correctPasscode = "032323";
    if (enteredPasscode === correctPasscode) {
        window.location.href = "picture.html"; 
    } else {
        alert("Incorrect passcode. Try again!");
        resetPasscode();
    }
}

function resetPasscode() {
    enteredPasscode = "";
    currentIndex = 0;
    inputs.forEach(input => input.value = "");
}
