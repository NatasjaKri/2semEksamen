const glitterButton = document.querySelector('.glitter-button');

function createSparkleOnButton(button) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  const rect = button.getBoundingClientRect();
  const offsetX = Math.random() * rect.width;
  const offsetY = Math.random() * rect.height;

  sparkle.style.left = `${rect.left + offsetX}px`;
  sparkle.style.top = `${rect.top + offsetY}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 800);
}

// Loop sparkles every 400ms
setInterval(() => {
  createSparkleOnButton(glitterButton);
}, 400);// JavaScript Document