const textElement = document.getElementById("typewriter");
const text = "Whispers of the Heart";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150); // Speed of typing in milliseconds
    } else {
        // Remove the blinking cursor after finishing
        textElement.style.borderRight = "none";
    }
}

// Start the animation when the window loads
window.onload = typeEffect;ct;