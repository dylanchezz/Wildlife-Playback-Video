/* =========================================================
   Save Our Wildlife — interactions
   1. Video toggle (hide / play)
   2. Colour-scheme switcher ("light of day")
   ========================================================= */

/* ---------- 1. VIDEO TOGGLE ---------- */
const video    = document.getElementById("wildlifeVideo");
const toggleBtn = document.getElementById("toggleBtn");
const btnLabel  = document.getElementById("btnLabel");

// If the video is NOT playing -> show it and play.
// If it IS playing -> hide it (and pause so the sound stops too).
toggleBtn.addEventListener("click", function () {
  if (video.paused) {
    video.style.display = "block";
    video.play();
    btnLabel.textContent = "Hide video";
  } else {
    video.pause();
    video.style.display = "none";
    btnLabel.textContent = "Show video";
  }
});

// Keep the label in sync if the video starts/ends by other means.
video.addEventListener("play",  () => { btnLabel.textContent = "Hide video"; });
video.addEventListener("pause", () => {
  if (video.style.display !== "none") btnLabel.textContent = "Play video";
});

/* ---------- 2. COLOUR-SCHEME SWITCHER ---------- */
const root     = document.documentElement;          // <html data-theme="...">
const swatches = document.querySelectorAll(".swatch");

function setTheme(name) {
  root.setAttribute("data-theme", name);
  swatches.forEach(s => {
    s.setAttribute("aria-current", s.dataset.setTheme === name ? "true" : "false");
  });
  try { localStorage.setItem("sow-theme", name); } catch (e) { /* ignore */ }
}

swatches.forEach(swatch => {
  swatch.addEventListener("click", () => setTheme(swatch.dataset.setTheme));
});

// Restore the visitor's last choice, or fall back to the page default.
let saved = "midday";
try { saved = localStorage.getItem("sow-theme") || "midday"; } catch (e) { /* ignore */ }
setTheme(saved);