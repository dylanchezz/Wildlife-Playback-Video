const video = document.getElementById("wildlifeVideo");
const toggleBtn = document.getElementById("toggleBtn");

// Button behaviour:
// If the video is NOT playing, play it.
// - If the video IS playing, hide it.
toggleBtn.addEventListener("click", function () {

  if (video.paused) {
    // Video is not playing, make sure it is visible and play it
    video.style.display = "block";
    video.play();
    toggleBtn.textContent = "Hide Video";
  } else {
    // Video is playing, hide it 
    video.pause();
    video.style.display = "none";
    toggleBtn.textContent = "Show Video";
  }
});

// Keep the button label correct if the video is shown again
video.addEventListener("play", function () {
  toggleBtn.textContent = "Hide Video";
});