const inputPhone = document.querySelector("#phone");
const inputMail = document.querySelector("#mail");
const iti = window.intlTelInput(inputPhone, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "/js/utils.js",
});
const phoneErrorMsg = document.getElementById("error-msg-phone");
const emailErrorMsg = document.getElementById("error-msg-email");
const buttonForm = document.getElementById("button");
function isValidNumber() {
  if (!iti.isValidNumber()) {
    phoneErrorMsg.classList.remove("hide");
    buttonForm.setAttribute("disabled", true);
  } else {
    phoneErrorMsg.classList.add("hide");
    buttonForm.removeAttribute("disabled");
  }
}
inputPhone.addEventListener("change", isValidNumber);
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidEmail() {
  if (!validateEmail(inputMail.value)) {
    emailErrorMsg.classList.remove("hide");
    buttonForm.setAttribute("disabled", true);
  } else {
    emailErrorMsg.classList.add("hide");
    buttonForm.removeAttribute("disabled");
  }
}
inputMail.addEventListener("change", isValidEmail);
