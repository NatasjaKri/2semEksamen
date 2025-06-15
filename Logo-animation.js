const logo = document.querySelector('.logo-tag');
const wordGame = document.querySelector('.word-game');
const wordProducer = document.querySelector('.word-producer');

let gameTimeout, producerTimeout;

// Kun aktivér animation hvis skærmbredden er over 800px
function shouldAnimate() {
  return window.innerWidth > 800;
}

// Skriver ét bogstav ad gangen
function typeText(target, text, speed, callback) {
  let i = 0;
  target.textContent = '';

  function type() {
    if (i < text.length) {
      target.textContent += text[i];
      i++;
      const timeout = setTimeout(type, speed);

      if (target.classList.contains('word-game')) gameTimeout = timeout;
      if (target.classList.contains('word-producer')) producerTimeout = timeout;
    } else if (callback) {
      callback();
    }
  }

  type();
}

// Sletter ét bogstav ad gangen baglæns
function eraseText(target, speed, callback) {
  let text = target.textContent;
  let i = text.length;

  function erase() {
    if (i > 0) {
      target.textContent = text.substring(0, i - 1);
      i--;
      const timeout = setTimeout(erase, speed);

      if (target.classList.contains('word-game')) gameTimeout = timeout;
      if (target.classList.contains('word-producer')) producerTimeout = timeout;
    } else if (callback) {
      callback();
    }
  }

  erase();
}

// Start typewriter-animation når siden loader
window.addEventListener('load', () => {
  if (shouldAnimate()) {
    typeText(wordGame, 'ame', 100, () => {
      typeText(wordProducer, 'roducer', 100);
    });
  } else {
    wordGame.textContent = 'ame';
    wordProducer.textContent = 'roducer';
  }
});

// Når musen holdes over logoet, slettes teksten baglæns
logo.addEventListener('mouseenter', () => {
  clearTimeout(gameTimeout);
  clearTimeout(producerTimeout);

  eraseText(wordProducer, 50, () => {
    eraseText(wordGame, 50);
  });
});

// Når musen fjernes, skrives teksten frem igen
logo.addEventListener('mouseleave', () => {
  clearTimeout(gameTimeout);
  clearTimeout(producerTimeout);

  typeText(wordGame, 'ame', 50, () => {
    typeText(wordProducer, 'roducer', 50);
  });
});

// Hvis skærmen ændrer størrelse, og animation ikke skal vises
function setStaticLogoText() {
  if (!shouldAnimate()) {
    wordGame.textContent = 'ame';
    wordProducer.textContent = 'roducer';
  }
}

window.addEventListener('resize', setStaticLogoText);

