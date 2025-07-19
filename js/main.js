// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const harvestBtn = document.getElementById('harvestBtn');
const loadingScreen = document.getElementById('loadingScreen');
const splineContainer = document.querySelector('.spline-container');
const signalStrength = document.getElementById('signalStrength');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Initialize application
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    setupEventListeners();
    handleSplineLoading();
    animateSignalStrength();
    initializeScrollEffects();
    initializeParallax();
    monitorPerformance();
    addConsoleEasterEgg();

    // Add loaded class for CSS animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking nav items
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Harvest button interaction
    harvestBtn.addEventListener('click', handleHarvestClick);

    // Navigation hover effects
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', handleNavHover);
        link.addEventListener('mouseleave', handleNavLeave);
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Window resize handler
    window.addEventListener('resize', handleWindowResize);

    // Error handling for Spline
    window.addEventListener('error', handleSplineError);
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';

    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
}

function closeMobileMenu() {
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navigation Hover Effects
function handleNavHover(event) {
    const link = event.currentTarget;
    link.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.5)';

    // Add subtle scale effect
    link.style.transform = 'translateY(-1px) scale(1.02)';
}

function handleNavLeave(event) {
    const link = event.currentTarget;
    link.style.textShadow = '';
    link.style.transform = '';
}

// Harvest Button Interaction
function handleHarvestClick() {
    // Visual feedback
    harvestBtn.style.transform = 'scale(0.95)';

    setTimeout(() => {
        harvestBtn.style.transform = '';
    }, 150);

    // Simulate harvest action
    console.log('🌾 HARVEST PROTOCOL INITIATED...');
    console.log('📡 Establishing connection to THRESHOLD network...');
    console.log('⚡ Energy signature detected. Processing...');

    // You can add more functionality here
    // For example: opening a modal, form submission, etc.

    // Temporary visual effect
    const effect = document.createElement('div');
    effect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(255, 255, 255, 0.8);
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        letter-spacing: 0.1em;
        z-index: 10000;
        pointer-events: none;
        animation: fadeOut 2s ease forwards;
    `;
    effect.textContent = 'HARVEST PROTOCOL ACTIVATED';
    document.body.appendChild(effect);

    setTimeout(() => {
        document.body.removeChild(effect);
    }, 2000);
}

// Signal Strength Animation
function animateSignalStrength() {
    const baseStrength = 94;
    const variation = 4;

    setInterval(() => {
        const fluctuation = Math.floor(Math.random() * variation) - 2;
        const newStrength = Math.max(90, Math.min(98, baseStrength + fluctuation));

        if (signalStrength) {
            signalStrength.textContent = newStrength;

            // Add visual indicator for low signal
            if (newStrength < 92) {
                signalStrength.style.color = 'rgba(255, 200, 200, 0.7)';
            } else {
                signalStrength.style.color = 'rgba(255, 255, 255, 0.5)';
            }
        }
    }, 3000);
}

// Spline Loading Handler
function handleSplineLoading() {
    const splineViewer = document.getElementById('splineViewer');

    if (splineViewer) {
        // Listen for Spline viewer load
        splineViewer.addEventListener('load', () => {
            setTimeout(() => {
                splineContainer.classList.add('loaded');
                hideLoadingScreen();
            }, 1000);
        });

        // Fallback timeout
        setTimeout(() => {
            splineContainer.classList.add('loaded');
            hideLoadingScreen();
        }, 4000);
    } else {
        setTimeout(hideLoadingScreen, 2000);
    }
}

function hideLoadingScreen() {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Parallax Effect
function initializeParallax() {
    let ticking = false;

    function updateParallax(e) {
        if (!ticking) {
            requestAnimationFrame(() => {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;

                const container = document.querySelector('.page-container');
                const offsetX = (mouseX - 0.5) * 30;
                const offsetY = (mouseY - 0.5) * 30;

                container.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('mousemove', updateParallax);
}

// Scroll Effects
function initializeScrollEffects() {
    let ticking = false;

    function updateScrollEffects() {
        const scrollY = window.scrollY;
        const nav = document.querySelector('.hero-nav');

        // Adjust navigation opacity based on scroll
        if (scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// Keyboard Navigation
function handleKeyboardNavigation(event) {
    switch (event.key) {
        case 'Escape':
            closeMobileMenu();
            break;
        case 'Enter':
            if (document.activeElement === harvestBtn) {
                harvestBtn.click();
            }
            break;
        case 'Tab':
            // Ensure proper tab navigation
            if (mobileMenu.classList.contains('active')) {
                // Trap focus within mobile menu
                const focusableElements = mobileMenu.querySelectorAll('a[href], button');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
            break;
    }
}

// Window Resize Handler
function handleWindowResize() {
    // Close mobile menu on desktop resize
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }

    // Adjust Spline container size if needed
    const splineContainer = document.querySelector('.spline-container');
    if (splineContainer && window.innerWidth < 480) {
        splineContainer.style.width = '250px';
        splineContainer.style.height = '250px';
    }
}

// Performance Monitoring
function monitorPerformance() {
    let lastTime = performance.now();
    let frameCount = 0;

    function checkFPS() {
        const currentTime = performance.now();
        frameCount++;

        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

            // Reduce effects on low-performance devices
            if (fps < 30) {
                document.body.classList.add('low-performance');
                console.warn('Low performance detected. Reducing visual effects.');
            }

            frameCount = 0;
            lastTime = currentTime;
        }

        requestAnimationFrame(checkFPS);
    }

    requestAnimationFrame(checkFPS);
}

// Error Handling
function handleSplineError(event) {
    if (event.message && (event.message.includes('spline') || event.filename.includes('spline'))) {
        console.warn('Spline viewer failed to load. Continuing without 3D element.');
        hideLoadingScreen();
    }
}

// Console Easter Egg
function addConsoleEasterEgg() {
    const asciiArt = `
╔══════════════════════════════════════════════════════════════╗
║                        THRESHOLD SYSTEM                      ║
║                     ACCESS LEVEL: VISITOR                    ║
║                   STATUS: INITIALIZATION                     ║
║                                                              ║
║  ▼ WELCOME TO THE THRESHOLD PROTOCOL ▼                      ║
║                                                              ║
║  "Form follows function. Origin unknown."                    ║
║                                                              ║
║  Available Commands:                                         ║
║  • threshold.harvest() - Initiate harvest protocol          ║
║  • threshold.signal() - Check signal strength               ║
║  • threshold.status() - System status report                ║
║                                                              ║
║  WARNING: Unauthorized access will be reported to the       ║
║  Threshold Council. Proceed with caution.                   ║
╚══════════════════════════════════════════════════════════════╝
    `;

    console.log(asciiArt);

    // Add interactive console commands
    window.threshold = {
        harvest: () => {
            console.log('🌾 HARVEST PROTOCOL INITIATED');
            console.log('📡 Scanning for energy signatures...');
            console.log('⚡ 3 signatures detected');
            console.log('🔄 Processing... Please stand by...');
            harvestBtn.click();
        },
        signal: () => {
            const strength = signalStrength ? signalStrength.textContent : '94';
            console.log(`📶 Current signal strength: ${strength}%`);
            console.log('📡 Connection status: STABLE');
            console.log('🛰️ Satellite link: ACTIVE');
        },
        status: () => {
            console.log('🖥️  THRESHOLD SYSTEM STATUS REPORT');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('🔋 Power Level: 98%');
            console.log('🌐 Network Status: CONNECTED');
            console.log('🎯 Target Acquisition: ACTIVE');
            console.log('⚡ Energy Harvesting: STANDBY');
            console.log('🔒 Security Level: MAXIMUM');
            console.log('📊 System Load: OPTIMAL');
        }
    };
}

// Add CSS for fade out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1.1); }
    }
    
    .low-performance * {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
    }
`;
document.head.appendChild(style);