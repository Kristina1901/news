window.addEventListener("scroll", function () {
  var header = document.getElementById("header1");
  if (window.scrollY > 0) {
    header.style.top = "0";
  } else {
    header.style.top = "-100%";
  }
});
function toggleAudio() {
  let audio = document.getElementById("audio");
  let pauseIcon = document.getElementById("pause");
  let playIcon = document.getElementById("play");
  if (audio.paused) {
    audio.play();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  } else {
    audio.pause();
    pauseIcon.style.display = "block";
    playIcon.style.display = "none";
  }
}
