document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <a href="index.html">
      <img class="logo" src="Assets/Test Logo.png" alt="Illustrated cat using a laptop" />
    </a>

    <nav class="main-nav">
      <ul class="main-nav-list">
        <li><a class="main-nav-link" href="index.html">About me</a></li>
        <li class="dropdown">
          <a class="main-nav-link dropdown-toggle" href="#">
            Work
            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/>
            </svg>
          </a>
          <ul class="dropdown-menu">
            <li><a class="main-nav-link" href="wisebloom.html">Wisebloom</a></li>
            <li><a class="main-nav-link" href="Munich.html">Munich</a></li>
            <li><a class="main-nav-link" href="tunnelguard.html">Tunnelguard</a></li>
          </ul>
        </li>
                <li>
          <a class="main-nav-link nav-cta" href="#contact-me">Contact</a>
        </li>
      </ul>
    </nav>

    <!-- Mobile-Only Navigation -->
    <button class="burger-menu" aria-label="Toggle mobile Menu">
      <img src="Assets/menu-outline.svg" alt="Open menu" class="menu-icon">
      <img src="Assets/close-outline.svg" alt="Close menu" class="close-icon hidden">
    </button>

    <nav class="mobile-menu">
      <ul class="mobile-menu-list">
        <li><a class="main-nav-link" href="index.html">About me</a></li>
        <li class="dropdown">
          <a class="main-nav-link dropdown-toggle" href="#">
            Work
            <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5m0 0l5-5"/>
            </svg>
          </a>
          <ul class="dropdown-menu">
            <li><a class="main-nav-link" href="wisebloom.html">Wisebloom</a></li>
            <li><a class="main-nav-link" href="Munich.html">Munich</a></li>
            <li><a class="main-nav-link" href="tunnelguard.html">Tunnelguard</a></li>
          </ul>
        </li>
        <!-- Contact Button inside Mobile Menu -->
        <li>
          <a class="nav-cta mobile-contact" href="#contact-me">Contact</a>
        </li>
      </ul>
    </nav>
  `;

  document.body.prepend(header);

  // Mobile Menu Toggle
  const burgerMenu = document.querySelector(".burger-menu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    burgerMenu.classList.toggle("active");

    // Toggle icons
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Dropdown toggle inside mobile menu
  const dropdownToggle = document.querySelector(
    ".mobile-menu .dropdown-toggle"
  );
  const dropdownMenu = document.querySelector(".mobile-menu .dropdown-menu");

  dropdownToggle.addEventListener("click", (event) => {
    event.preventDefault();
    dropdownMenu.classList.toggle("open");
  });
});
