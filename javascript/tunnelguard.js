document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".brand-guideline-toggle");
  const content = document.querySelector(".brand-guideline-content");

  toggleButton.addEventListener("click", function () {
    this.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
