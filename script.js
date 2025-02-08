
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
const images = [
    { src: "images/img1.jpg", desc: "First" },
    { src: "image2.jpg", desc: "Description 2" },
    { src: "image3.jpg", desc: "Description 3" },
    { src: "image4.jpg", desc: "Description 4" },
    { src: "image5.jpg", desc: "Description 5" },
    { src: "image6.jpg", desc: "Description 6" },
    { src: "image7.jpg", desc: "Description 7" },
    { src: "image8.jpg", desc: "Description 8" },
    { src: "image9.jpg", desc: "Description 9" },
    { src: "image10.jpg", desc: "Description 10" }
];

let galleryIndex = 0;

    function updateGallery() {
        document.getElementById("galleryImage").src = images[galleryIndex].src;
        document.getElementById("galleryDescription").textContent = images[galleryIndex].desc;
    }

    function nextImage() {
        galleryIndex = (galleryIndex + 1) % images.length;
        updateGallery();
    }

    function prevImage() {
        galleryIndex = (galleryIndex - 1 + images.length) % images.length;
        updateGallery();
    }

    updateGallery();