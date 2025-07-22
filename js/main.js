// ========================================
// MAIN JAVASCRIPT FILE
// ========================================

// ======================================================
// AOS Initialize 
// ====================================================== 
document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS && typeof AOS.init === "function") {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  } else {
    console.warn("AOS library not loaded.");
  }

  // Nav Menu 
  initMenu();
});

// ======================================================
// Navigation Menu
// ======================================================
let isMenuOpen = false;

// Cache elements once DOM is ready. We'll fill these in DOMContentLoaded.
let mobileMenuBtn;
let mobileMenu;
let floatingNav;
let mobileLinks;

// Open/close handlers
function openMenu() {
  if (!mobileMenu || !floatingNav || !mobileMenuBtn) return;
  isMenuOpen = true;
  mobileMenu.classList.add("active");
  floatingNav.classList.add("menu-open");
  mobileMenuBtn.checked = true;
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  if (!mobileMenu || !floatingNav || !mobileMenuBtn) return;
  isMenuOpen = false;
  mobileMenu.classList.remove("active");
  floatingNav.classList.remove("menu-open");
  mobileMenuBtn.checked = false;
  document.body.style.overflow = "";
}

function toggleMenu(checked) {
  if (checked) {
    openMenu();
  } else {
    closeMenu();
  }
}

// Initialize menu wiring after DOM loads
function initMenu() {
  mobileMenuBtn = document.getElementById("mobileMenuBtn");
  mobileMenu = document.getElementById("mobileMenu");
  floatingNav = document.getElementById("floatingNav");
  mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!mobileMenuBtn || !mobileMenu || !floatingNav) {
    console.warn("[initMenu] Missing required elements.");
    return;
  }

  // Sync state if checkbox was pre-checked by server render
  toggleMenu(mobileMenuBtn.checked);

  // Listen to checkbox changes (your hamburger toggle)
  mobileMenuBtn.addEventListener("change", () => {
    console.log("Menu checkbox changed:", mobileMenuBtn.checked);
    toggleMenu(mobileMenuBtn.checked);
  });

  // Close menu when any mobile nav link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      console.log("Mobile nav link clicked, closing menu.");
      closeMenu()
    });
  });
}

// Click outside menu to close
document.addEventListener("click", (e) => {
  if (
    isMenuOpen &&
    floatingNav &&
    !floatingNav.contains(e.target) &&
    mobileMenuBtn !== e.target
  ) {
    closeMenu();
  }
});

// ======================================================
// Theme Toggle (Independent Script)
// ======================================================

function initThemeToggle() {
  const body = document.body;
  const desktopToggle = document.getElementById("desktopThemeToggle");
  const mobileToggle = document.getElementById("mobileThemeToggle");

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", savedTheme);

  // Function to toggle theme
  function toggleTheme() {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  // Attach event listeners
  desktopToggle?.addEventListener("click", toggleTheme);
  mobileToggle?.addEventListener("click", toggleTheme);
}

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
});


// ======================================================
// Energy Grid
// ====================================================== 
const gridSize = 50; // Match CSS --grid-size
let animationActive = true;
let energySpecks = [];

function createEnergySpeck(type, position) {
  const speck = document.createElement('div');
  speck.className = `energy-speck ${type}`;

  if (type === 'horizontal') {
    // Position the line to align with grid line (center the 1px height)
    speck.style.top = `${position}px`;
    speck.style.left = '-100px';
  } else {
    // Position the line to align with grid line (center the 1px width)
    speck.style.left = `${position}px`;
    speck.style.top = '-100px';
  }

  return speck;
}

function initializeEnergyGrid() {
  const container = document.getElementById('energyContainer');
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  // Create horizontal lines for every few grid lines
  for (let i = 0; i < windowHeight; i += gridSize * 3) { // Every 3rd grid line
    const speck = createEnergySpeck('horizontal', i);
    // Random delay to stagger the lines
    speck.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(speck);
    energySpecks.push(speck);
  }

  // Create vertical lines for every few grid lines
  for (let i = 0; i < windowWidth; i += gridSize * 4) { // Every 4th grid line
    const speck = createEnergySpeck('vertical', i);
    // Random delay to stagger the lines
    speck.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(speck);
    energySpecks.push(speck);
  }
}

function spawnEnergySpecks() {
  // This function is now only used for the toggle functionality
  return;
}

function toggleAnimation() {
  animationActive = !animationActive;
  const container = document.getElementById('energyContainer');

  if (animationActive) {
    container.style.display = 'block';
    document.querySelector('.toggle-btn').textContent = 'Toggle Energy Lines';
  } else {
    container.style.display = 'none';
    document.querySelector('.toggle-btn').textContent = 'Toggle Energy Lines';
  }
}

// Initialize the energy grid on page load
window.addEventListener('load', () => {
  initializeEnergyGrid();
});

// Reinitialize on window resize
window.addEventListener('resize', () => {
  const container = document.getElementById('energyContainer');
  // Clear existing lines
  energySpecks.forEach(speck => {
    if (speck.parentNode) {
      speck.parentNode.removeChild(speck);
    }
  });
  energySpecks = [];

  // Reinitialize with new dimensions
  if (animationActive) {
    initializeEnergyGrid();
  }
});