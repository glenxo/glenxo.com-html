function checkAnswer(value) {
  if (value === 1) {
    launchConfetti();
  } else {
    popRedBalloon();
  }
}

/* ===== CONFETTI ===== */
function launchConfetti() {
  const container = document.getElementById("confetti");
  container.innerHTML = "";

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      ["#f44336", "#ffeb3b", "#4caf50", "#2196f3"][Math.floor(Math.random() * 4)];
    piece.style.animationDelay = Math.random() * 0.4 + "s";

    container.appendChild(piece);
  }

  setTimeout(() => (container.innerHTML = ""), 1200);
}

/* ===== BALLOON POP ===== */
function popRedBalloon() {
  const balloon = document.getElementById("balloon");

  balloon.classList.remove("pop");
  void balloon.offsetWidth;

  balloon.style.opacity = "1";
  balloon.classList.add("pop");
}
