// Typing animation with word cycling
function typeWriter() {
    const words = ['Websites', 'Experiences', 'Solutions', 'Interfaces', 'Applications'];
    const typingElement = document.getElementById('typing-text');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            // Remove characters
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Pause before typing next word
                return;
            }
        } else {
            // Add characters
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Pause before deleting
                return;
            }
        }

        // Typing speed
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }

    type();
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});