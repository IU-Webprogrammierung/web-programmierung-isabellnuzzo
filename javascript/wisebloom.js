document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector(".image-container");

  if (imageContainer) {
    const firstImage = imageContainer.querySelector("img:first-child");
    const lastImage = imageContainer.querySelector("img:last-child");

    //"tap me" indicator for mobile users
    const tapIndicator = document.createElement("span");
    tapIndicator.className = "tap-indicator";
    tapIndicator.textContent = "tap me";
    imageContainer.parentNode.insertBefore(
      tapIndicator,
      imageContainer.nextSibling
    );

    if (window.innerWidth > 768) {
      if (lastImage) {
        lastImage.style.display = "block";
      }
      tapIndicator.style.display = "none";
    }

    const toggleImages = () => {
      if (window.innerWidth <= 768) {
        imageContainer.classList.toggle("swap");
        if (imageContainer.classList.contains("swap")) {
          firstImage.style.display = "none";
          lastImage.style.display = "block";
        } else {
          firstImage.style.display = "block";
          lastImage.style.display = "none";
        }
      } else {
        if (firstImage && lastImage) {
          if (lastImage.style.zIndex === "3") {
            lastImage.style.zIndex = "1";
            firstImage.style.zIndex = "2";
            lastImage.style.transition = "transform 0.5s";
            firstImage.style.transition = "transform 0.5s";
            lastImage.style.transform = "scale(0.95)";
            firstImage.style.transform = "scale(1)";
          } else {
            lastImage.style.zIndex = "3";
            firstImage.style.zIndex = "1";
            lastImage.style.transition = "transform 0.5s";
            firstImage.style.transition = "transform 0.5s";
            lastImage.style.transform = "scale(1)";
            firstImage.style.transform = "scale(0.95)";
          }
        }
      }
    };

    tapIndicator.addEventListener("click", toggleImages);

    if (window.innerWidth > 768) {
      imageContainer.addEventListener("click", toggleImages);
    }

    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

      tapIndicator.style.display = isMobile ? "block" : "none";

      imageContainer.removeEventListener("click", toggleImages);
      if (!isMobile) {
        imageContainer.addEventListener("click", toggleImages);
      }

      if (firstImage && lastImage) {
        if (isMobile) {
          // Mobile styles
          firstImage.style.position = "relative";
          lastImage.style.position = "relative";
          firstImage.style.top = "0";
          if (!imageContainer.classList.contains("swap")) {
            lastImage.style.display = "none";
            firstImage.style.display = "block";
          } else {
            firstImage.style.display = "none";
            lastImage.style.display = "block";
          }
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
  }
});
