document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // BOTÓN NO que se mueve
  // =========================
  const btnNo = document.querySelector("#btn-random");

  function moverAleatoriamente(btn) {
    // Se mueve dentro de la ventana (viewport)
    btn.style.position = "fixed"; // mejor que absolute
    btn.style.fontWeight = "bolder";

    // rangos para que no se vaya fuera de pantalla
    const maxTop = 85;
    const maxLeft = 85;

    btn.style.top = Math.floor(Math.random() * maxTop + 5) + "vh";
    btn.style.left = Math.floor(Math.random() * maxLeft + 5) + "vw";
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
