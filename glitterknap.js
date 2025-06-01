const glitterButton = document.querySelector('.glitter-button'); //finder den rigtige knap

function createSparkleOnButton(button) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle'); //ny class, bruges i CSS

  //finder den rigtige position og størrelse på knappen
  const rect = button.getBoundingClientRect();
  const offsetX = Math.random() * rect.width;
  const offsetY = Math.random() * rect.height;

  //placere glitter randomly + tilføjet scroll-behaviour hvis det skulle bruges senere. 
  sparkle.style.left = `${rect.left + offsetX + window.scrollX}px`;
  sparkle.style.top = `${rect.top + offsetY + window.scrollY}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 800); //fjerner glitter efter animation
}

// Loop glitter hver 400ms
setInterval(() => {
  createSparkleOnButton(glitterButton);
}, 700);
