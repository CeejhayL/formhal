
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
    const imgcorrectPasscode = "032323";
    const lettcorrectPasscode = "012003";
    if (enteredPasscode === imgcorrectPasscode) {
        window.location.href = "picture.html"; 
    } else if(enteredPasscode === lettcorrectPasscode){
        window.location.href = "letters.html";
    }
    else {
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
    { src: "images/img1.jpg", desc: "First Picture natin na maganda ang Camera hehehe. Proud ako satin kahit elementary palang natapos natin dito." },
    { src: "images/img2.jpg", desc: "First time na makasama ka sa swimming. Muntik pa umiyak kasi muntik ka di makasama HAHAHAHA." },
    { src: "images/img3.jpg", desc: "Second time na sumama ka sa swimming, sobrang saya ko non kasi nakasama kita ng overnight. Thank you kasi sumama ka!" },
    { src: "images/img4.jpg", desc: "Tamang antay ng bus sa famy ng maaga, medyo antok pa. Malungkot kasi paalis ka ulit pero walang choice kasi need pumasok sa school." },
    { src: "images/img5.jpg", desc: "National Museum, napakasaya ko niyan. Kahit pagod na kakalakad masaya padin kasi kasama ka. Soon sa Fine Arts naman." },
    { src: "images/img6.jpg", desc: "Eto yung first time na pumunta ako sayo, sa SM na tayo nagkita kasi tinanghali na ako. Kahit wala tayo masyado ginawa niyan ansaya ko padin kasi nakasama kita." },
    { src: "images/img7.jpg", desc: "Eto yung ihahatid dapat kita kaso punuan yung mga bus kaya no choice kundi ihatid ka, buti nakasama ako. Medyo nakakahiya lang kasi ayaw tanggapin pang gas. Sobrang saya ko dito kahit hindi nagawa plano natin na ihatid kita pa commute." },
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

