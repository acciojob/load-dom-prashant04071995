document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const body = document.querySelector("body");
    const text = document.createTextNode("DOM load success");
    body.appendChild(text);
  }, 1000);
});