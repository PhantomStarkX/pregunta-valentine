document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BOTÓN NO que se mueve (SOLO en el área de botones)
  ========================== */

  const btnNo = document.querySelector("#btn-random");
  const area = document.querySelector("#btn-area"); // <- el div de botones

  function moverDentroDelArea(btn, area) {
    if (!btn || !area) return;

    // límites del área
    const maxLeft = area.clientWidth - btn.offsetWidth;
    const maxTop = area.clientHeight - btn.offsetHeight;

    const padding = 6;

    const left = Math.random() * Math.max(0, (maxLeft - padding * 2)) + padding;
    const top = Math.random() * Math.max(0, (maxTop - padding * 2)) + padding;

    btn.style.position = "absolute";
    btn.style.left = left + "px";
    btn.style.top = top + "px";
    btn.style.transform = "none"; // evita desplazamientos raros
  }

  if (btnNo && area) {
    // posición inicial para que se vea
    moverDentroDelArea(btnNo, area);

    btnNo.addEventListener("mouseenter", (e) => {
      moverDentroDelArea(e.target, area);
    });

    // opcional: evita que navegue al dar click
    btnNo.addEventListener("click", (e) => e.preventDefault());
  }


  /* =========================
     CORAZONES flotando (solo si existe .hearts)
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
