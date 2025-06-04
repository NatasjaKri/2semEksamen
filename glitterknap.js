const glitterButton = document.querySelector('.glitter-button');

function createSparkleOnButton(button) {
  const svgNS = "http://www.w3.org/2000/svg";

  // Opret en inline SVG stjerne
  const sparkle = document.createElementNS(svgNS, "svg");
  sparkle.setAttribute("class", "sparkle");
  sparkle.setAttribute("width", "12");
  sparkle.setAttribute("height", "12");
  sparkle.setAttribute("viewBox", "0 0 24 24");
  sparkle.setAttribute("fill", "currentColor"); // så vi kan style med CSS

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", "M12 0L14.4 7.2L22 9L14.4 10.8L12 18L9.6 10.8L2 9L9.6 7.2L12 0Z");

  sparkle.appendChild(path);

  // Positionér sparkle på tilfældig placering inde i knappen
  const rect = button.getBoundingClientRect();
  const offsetX = Math.random() * rect.width;
  const offsetY = Math.random() * rect.height;

  sparkle.style.position = "absolute";
  sparkle.style.left = `${rect.left + offsetX + window.scrollX}px`;
  sparkle.style.top = `${rect.top + offsetY + window.scrollY}px`;

  document.body.appendChild(sparkle);

  // Fjern sparkle efter animation
  setTimeout(() => sparkle.remove(), 1500);
}

// Start glitter-loop
setInterval(() => {
  createSparkleOnButton(glitterButton);
}, 700);