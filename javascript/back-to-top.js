// Create button element
const backToTopButton = document.createElement("button");
backToTopButton.className = "backToTopBtn";
backToTopButton.innerHTML = `
  <svg class="svgIcon" viewBox="0 0 384 512">
    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 
    12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 
    14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 
    32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
  </svg>
`;

// Click behavior
backToTopButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.body.appendChild(backToTopButton);

// CSS styles
const style = document.createElement("style");
style.innerHTML = `
.backToTopBtn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3e1046;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.backToTopBtn .svgIcon {
  width: 12px;
  transition-duration: 0.3s;
}

.backToTopBtn .svgIcon path {
  fill: white;
}

.backToTopBtn:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: #9c27b0;
  align-items: center;
}

.backToTopBtn:hover .svgIcon {
  transform: translateY(-200%);
  transition-duration: 0.3s;
}

.backToTopBtn::before {
  position: absolute;
  bottom: -20px;
  content: "Back to Top";
  color: white;
  font-size: 0px;
}

.backToTopBtn:hover::before {
  font-size: 13px;
  opacity: 1;
  bottom: unset;
  transition-duration: 0.3s;
}
`;
document.head.appendChild(style);

backToTopButton.style.display = "none";

window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY > 100 ? "flex" : "none";
});
