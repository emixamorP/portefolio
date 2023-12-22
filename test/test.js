const navbar = document.querySelector('.navbar');

function updateGradient() {
  const now = Date.now() / 1000; // Convert to seconds
  const hue = (now * 30) % 360; // Change color every 30 seconds
  const colors = [
    `hsl(${hue}, 100%, 50%)`,
    `hsl(${hue + 60}, 100%, 50%)`,
    `hsl(${hue + 120}, 100%, 50%)`,
    `hsl(${hue + 180}, 100%, 50%)`,
    `hsl(${hue + 240}, 100%, 50%)`,
    `hsl(${hue + 300}, 100%, 50%)`,
  ];
  navbar.style.backgroundImage = `linear-gradient(to left, ${colors.join(', ')})`;
}

setInterval(updateGradient, 0.5); // Update gradient every 100 milliseconds
