 document.addEventListener("DOMContentLoaded", function () {
        const body = document.querySelector("body");
        const text = document.createTextNode("DOM load success");
        body.appendChild(text);
      });