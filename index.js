function checkAnswer(value) {
  if (value === 1) {
    launchConfetti();

    setTimeout(() => {
      goToNextQuestion();
    }, 2000);
  } else {
    popRedBalloon();
  }
}

/* ===== PAGE NAVIGATION ===== */
function goToNextQuestion() {
  const currentPage = window.location.pathname;
  const match = currentPage.match(/ans(\d+)\.html/);

  if (!match) return;

  const currentNumber = parseInt(match[1], 10);
  const nextNumber = currentNumber + 1;

  if (nextNumber <= 20) {
    window.location.href = `ans${nextNumber}.html`;
  } else {
    // OPTIONAL: quiz finished
    window.location.href = "finish.html";
  }
}

/* ===== CONFETTI ===== */
function launchConfetti() {
  const container = document.getElementById("confetti");
  container.innerHTML = "";

  const colors = ["#f44336", "#ffeb3b", "#4caf50", "#2196f3"];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.top = "50%";
    piece.style.left = "50%";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(piece);

    const x = (Math.random() - 0.5) * 600;
    const y = Math.random() * 700 + 200;

    piece.animate(
      [
        { transform: "translate(-50%, -50%) rotate(0deg)" },
        { transform: `translate(${x}px, ${y}px) rotate(720deg)` }
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(.15,.6,.3,1)",
        fill: "forwards"
      }
    );
  }

  setTimeout(() => (container.innerHTML = ""), 1500);
}

/* ===== BALLOON POP ===== */
function popRedBalloon() {
  const balloon = document.getElementById("balloon");
  balloon.classList.remove("pop");
  void balloon.offsetWidth;
  balloon.style.opacity = "1";
  balloon.classList.add("pop");
}
