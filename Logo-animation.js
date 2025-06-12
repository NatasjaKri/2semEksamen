const logo = document.querySelector('.logo-tag');
const wordGame = document.querySelector('.word-game');
const wordProducer = document.querySelector('.word-producer');

let gameTimeout, producerTimeout;

function typeText(target, text, speed, callback) {
  let i = 0;
  target.textContent = '';

  function type() {
    if (i < text.length) {
      target.textContent += text[i];
      i++;
      const timeout = setTimeout(type, speed);

      // Save reference to timeout so we can cancel it later
      if (target.classList.contains('word-game')) gameTimeout = timeout;
      if (target.classList.contains('word-producer')) producerTimeout = timeout;
    } else if (callback) {
      callback();
    }
  }

  type();
}

logo.addEventListener('mouseenter', () => {
  // Clear existing timeouts (if any) to avoid duplicate typing
  clearTimeout(gameTimeout);
  clearTimeout(producerTimeout);

  // Start fresh typing
  typeText(wordGame, 'ame', 100, () => {
    typeText(wordProducer, 'roducer', 100);
  });
});

logo.addEventListener('mouseleave', () => {
  clearTimeout(gameTimeout);
  clearTimeout(producerTimeout);
  wordGame.textContent = '';
  wordProducer.textContent = '';
});
