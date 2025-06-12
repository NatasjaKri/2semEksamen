//Finder HTML-elementerne vi skal bruge til animationen.
const logo = document.querySelector('.logo-tag');
const wordGame = document.querySelector('.word-game');
const wordProducer = document.querySelector('.word-producer');

let gameTimeout, producerTimeout;

// En funktion der skriver ét bogstav ad gangen i et element, med mulighed for at kalde næste animation bagefter.
function typeText(target, text, speed, callback) {
  let i = 0;
  target.textContent = '';

  function type() {
    if (i < text.length) {
      target.textContent += text[i];
      i++;
      const timeout = setTimeout(type, speed);

     // Funktion der skriver tekst ud ét bogstav ad gangen
	 // Bruges til at animere "ame" og "roducer" med en typewriter-effekt
      if (target.classList.contains('word-game')) gameTimeout = timeout;
      if (target.classList.contains('word-producer')) producerTimeout = timeout;
    } else if (callback) {
      callback();
    }
  }

  type();
}

//Når musen holdes over logoet, aktiveres animationsfunktionen — først “ame”, derefter “roducer”.
logo.addEventListener('mouseenter', () => {
  // fjerner eksisterende timeouts, undgår dublikering
  clearTimeout(gameTimeout);
  clearTimeout(producerTimeout);

  // Startr animationen + tid
  typeText(wordGame, 'ame', 40, () => {
    typeText(wordProducer, 'roducer', 40);
  });
});

//Når musen forlader logoet, bliver teksten fjernet og eventuelle animationer stoppet, så det kan starte forfra.
logo.addEventListener('mouseleave', () => {
  clearTimeout(gameTimeout);
  clearTimeout(producerTimeout);
  wordGame.textContent = '';
  wordProducer.textContent = '';
});
