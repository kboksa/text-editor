(() => {
  const e = document.getElementById("buttonInstall");
  window.addEventListener("beforeinstallprompt", (d) => {
    (window.deferredPrompt = d), e.classList.toggle("hidden", !1);
  }),
    e.addEventListener("click", async () => {
      const d = window.deferredPrompt;
      d &&
        (d.prompt(),
        (window.deferredPrompt = null),
        e.classList.toggle("hidden", !0));
    }),
    window.addEventListener("appinstalled", (e) => {
      window.deferredPrompt = null;
    });
})();
