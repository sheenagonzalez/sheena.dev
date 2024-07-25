window.onload = function () {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const themeToggleContainer = document.getElementById("themeToggleContainer");
  const menuButton = document.getElementById("menuButton");
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  var prevScrollpos = window.scrollY;
  const navBar = document.getElementById("nav");

  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos || menuButton.checked) {
      navBar.style.top = "0";
      hamburgerMenu.classList.remove("hamburger--dark");
    } else {
      navBar.style.top = "-72px";

      if (!themeToggle.checked) {
        hamburgerMenu.classList.add("hamburger--dark");
      }
    }
    prevScrollpos = currentScrollPos;
  };

  // Dark mode toggle
  function toggleTheme() {
    if (themeToggle.checked) {
      body.classList.add("dark-mode");
      hamburgerMenu.classList.remove("hamburger--dark");
      themeToggleContainer.classList.add("theme-toggle--active");
    } else {
      body.classList.remove("dark-mode");
      themeToggleContainer.classList.remove("theme-toggle--active");
    }
  }
  themeToggleContainer.addEventListener("click", toggleTheme);

  var pathname = window.location.pathname;

  // Homepage scripts
  if (pathname === "/") {
    // Lamp toggles dark mode
    const lamp = document.getElementById("lamp");
    lamp.addEventListener("click", () => {
      themeToggle.click();
    });
    // Header animations
    var windowSunIdleAnim = bodymovin.loadAnimation({
      container: document.getElementById("windowSunIdleAnimContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "img/animations/lottie-window-sun-idle.json",
    });
    var windowMoonIdleAnim = bodymovin.loadAnimation({
      container: document.getElementById("windowMoonIdleAnimContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "img/animations/lottie-window-moon-idle.json",
    });
    var charWaveAnim = bodymovin.loadAnimation({
      container: document.getElementById("charWaveAnimContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "img/animations/lottie-char-wave.json",
    });
    var plantIdleAnim = bodymovin.loadAnimation({
      container: document.getElementById("plantIdleAnimContainer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "img/animations/lottie-plant-idle.json",
    });
  }
};
