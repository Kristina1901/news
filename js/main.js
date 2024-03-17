window.addEventListener("scroll", function () {
  let header = document.getElementById("header1");
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
let cookieButton = document.getElementById("cookieButton");
let cookieBar = document.getElementById("cookieBar");
cookieButton.addEventListener("click", function () {
  localStorage.setItem("cookie", "true");
  cookieBar.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("cookie")) {
    cookieBar.style.display = "none";
  } else {
    cookieBar.style.display = "flex";
  }
});
// Form
let form = document.getElementById("formItem");
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, email, phone },
  } = event.currentTarget;
  const nameValue = name.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  localStorage.setItem("name", nameValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("phone", phoneValue);
  window.location.href = "/thank";
  form.reset();
}
form.addEventListener("submit", handleSubmit);
