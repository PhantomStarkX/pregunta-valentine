document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BOTÓN NO que se mueve
  ========================== */

  const btnNo = document.querySelector("#btn-random");
  const container = document.querySelector(".container");

  function moverDentroDelContainer(btn, cont) {
    if (!btn || !cont) return;

    // Asegura que el container sea referencia
    btn.style.position = "absolute";

    const maxTop = cont.clientHeight - btn.offsetHeight;
    const maxLeft = cont.clientWidth - btn.offsetWidth;

    const padding = 10; // margen para que no toque bordes

    const randomTop = Math.random() * (maxTop - padding);
    const randomLeft = Math.random() * (maxLeft - padding);

    btn.style.top = Math.max(padding, randomTop) + "px";
    btn.style.left = Math.max(padding, randomLeft) + "px";
  }

  if (btnNo && container) {
    // Posición inicial visible
    moverDentroDelContainer(btnNo, container);

    btnNo.addEventListener("mouseenter", (e) => {
      moverDentroDelContainer(e.target, container);
    });
  }


  /* =========================
     CORAZONES flotando
  ========================== */

  const heartsContainer = document.querySelector(".hearts");

  if (heartsContainer) {

    function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = "❤️";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = (Math.random() * 18 + 14) + "px";
      heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

      heartsContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 250);
  }

});

