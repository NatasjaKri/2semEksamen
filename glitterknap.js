// JavaScript Document
const glitterButton = document.querySelector('.glitter-button'); //finder den rigtige knap

function createSparkleOnButton(button) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle'); //ny class, bruges i CSS

	//finder den rigtige position og størrelse på knappen
  const rect = button.getBoundingClientRect();
  const offsetX = Math.random() * rect.width;
  const offsetY = Math.random() * rect.height;

	//placere glitter randomly.
  sparkle.style.left = ${rect.left + offsetX}px;
  sparkle.style.top = ${rect.top + offsetY}px;

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 800); //add'er timeout for animation for at undgå at have for mange elementer til at kører på samme tid. 
}

// Loop glitter hver 400ms
setInterval(() => {
  createSparkleOnButton(glitterButton);
}, 400);
