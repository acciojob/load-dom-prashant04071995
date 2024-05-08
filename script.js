document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const body = document.querySelector("body");
    const text = document.createTextNode();
    body.appendChild(text);
  }, 1000);
});