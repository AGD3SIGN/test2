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