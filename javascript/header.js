document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <a href="index.html">
      <img
        class="logo"
        src="Assets/Test Logo.png"
        alt="Illustrated cat using a laptop"
      />
    </a>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li><a class="main-nav-link" href="index.html">About me</a></li>
        <li class="dropdown">
          <a class="main-nav-link" href="#">
            Work
            <svg
              class="dropdown-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 10l5 5m0 0l5-5"
              />
            </svg>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="main-nav-link" href="wisebloom.html">Wisebloom</a>
            </li>
            <li><a class="main-nav-link" href="Munich.html">Munich</a></li>
            <li>
              <a class="main-nav-link" href="tunnelguard.html">Tunnelguard</a>
            </li>
          </ul>
        </li>
        <li>
          <a class="main-nav-link nav-cta" href="#contact-me">Contact</a>
        </li>
      </ul>
    </nav>
  `;
  document.body.prepend(header);
});
