document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // BOTÓN NO que se mueve
  // =========================
  const btnNo = document.querySelector("#btn-random");

 function moverAleatoriamente(btn) {
  const container = document.querySelector(".container");

  const containerRect = container.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();

  const maxTop = container.clientHeight - btnRect.height;
  const maxLeft = container.clientWidth - btnRect.width;

  const randomTop = Math.random() * maxTop;
  const randomLeft = Math.random() * maxLeft;

  btn.style.position = "absolute";
  btn.style.top = randomTop + "px";
  btn.style.left = randomLeft + "px";
}

  // Solo si existe el botón NO en esta página
  if (btnNo) {
    btnNo.addEventListener("mouseenter", (e) => {
      moverAleatoriamente(e.target);
    });
  }

  // =========================
  // CORAZONES flotando
  // =========================
  const heartsContainer = document.querySelector(".hearts");

  function createHeart() {
    if (!heartsContainer) return; // si no existe, no hace nada

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 18 + 14) + "px";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  // Solo si existe el contenedor de corazones
  if (heartsContainer) {
    setInterval(createHeart, 250);
  }

});
