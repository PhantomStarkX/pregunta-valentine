document.addEventListener("DOMContentLoaded", () => {
  const btnNo = document.querySelector("#btn-random");
  const area = document.querySelector("#btn-area");

  if (!btnNo || !area) return;

  function moverDentroDelArea() {
    const maxLeft = area.clientWidth - btnNo.offsetWidth;
    const maxTop = area.clientHeight - btnNo.offsetHeight;
    const padding = 8;

    const left = Math.random() * Math.max(0, maxLeft - padding * 2) + padding;
    const top = Math.random() * Math.max(0, maxTop - padding * 2) + padding;

    btnNo.style.left = left + "px";
    btnNo.style.top = top + "px";
    btnNo.style.transform = "none";
  }

  // ✅ Posición inicial garantizada
  moverDentroDelArea();

  // ✅ Huye al pasar el mouse
  btnNo.addEventListener("mouseenter", moverDentroDelArea);

  // ✅ Evita que al click te mande arriba
  btnNo.addEventListener("click", (e) => e.preventDefault());
  
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
