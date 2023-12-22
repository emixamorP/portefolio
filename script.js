document.addEventListener("DOMContentLoaded", function() {
    var textContainer = document.getElementById('text-container');
monElement.classList.add("h1");
let text = textContainer.textContent;
let index = 0;
let isErasing = false;

function writeAndEraseText() {
  if (isErasing) {
    textContainer.textContent = text.substring(0, index);
    index--;
    if (index < 0) {
      index = 0;
      isErasing = false;
    }
  } else {
    textContainer.textContent = text.substring(0, index);
    index++;
    if (index > text.length) {
      index = text.length;
      isErasing = true;
    }
  }

  setTimeout(writeAndEraseText, 200); // Vitesse d'écriture et d'effacement du texte
}

// Démarrez le processus d'écriture et d'effacement
writeAndEraseText();
});