const text = "Are you ready to begin the journey ?"; // The text you want to show
const typingSpeed = 100; // Speed of typing (in milliseconds)
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        // Show buttons after typing effect is complete
        document.querySelector('.cursor').style.display = 'none'; // Hide the cursor
        document.getElementById("buttons-container").classList.remove('hidden'); // Show buttons
    }
}

// Start typing effect on page load
window.onload = function () {
    typeText();
};