(function () {
  const splash = document.getElementById("splash");
  const SPLASH_MS = 10000;

  let hidden = false;

  function hideSplash() {
    if (hidden) return;
    hidden = true;
    splash.classList.add("is-hidden");
    splash.setAttribute("aria-hidden", "true");
  }

  // Auto-hide a los 10s
  const t = setTimeout(hideSplash, SPLASH_MS);

  // Permitir saltar con click o tecla
  function skip() {
    clearTimeout(t);
    hideSplash();
    window.removeEventListener("click", skip);
    window.removeEventListener("keydown", skip);
    window.removeEventListener("touchstart", skip);
  }

  window.addEventListener("click", skip, { once: true });
  window.addEventListener("touchstart", skip, { once: true });
  window.addEventListener("keydown", skip, { once: true });
})();
