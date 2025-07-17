// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const highlights = entry.target.querySelectorAll('.highlight-word');
            highlights.forEach((highlight, index) => {
                setTimeout(() => {
                    highlight.classList.add('animate');
                }, index * 200); // Stagger animation if multiple highlights
            });
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Optional: Add hover effects
document.querySelectorAll('.highlight-word').forEach(word => {
    word.addEventListener('mouseenter', () => {
        word.style.transform = 'scale(1.05)';
        word.style.transition = 'transform 0.2s ease';
    });

    word.addEventListener('mouseleave', () => {
        word.style.transform = 'scale(1)';
    });
});