// Cookie Banner functionality for Drive.IO
function initCookieBanner() {
  const cookieBanner = document.getElementById("cookie-banner");
  if (!cookieBanner) {
    console.warn("Cookie banner element not found");
    return;
  }

  // Check if cookies were already accepted
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (!cookiesAccepted) {
    // Show cookie banner after a short delay with traffic light effect
    setTimeout(() => {
      cookieBanner.classList.add("show");

      // Add traffic light icon animation
      const acceptButton = cookieBanner.querySelector(".btn-primary");
      if (acceptButton) {
        acceptButton.innerHTML = '<span class="cookie-icon">🚦</span>Accept';
      }
    }, 1500); // Slightly longer delay for better UX
  } else {
    // Hide banner if cookies were already accepted
    cookieBanner.style.display = "none";
  }
}

// Accept cookies function with enhanced feedback
function acceptCookies() {
  const cookieBanner = document.getElementById("cookie-banner");

  if (!cookieBanner) {
    console.warn("Cookie banner element not found");
    return;
  }

  try {
    // Store acceptance in localStorage
    localStorage.setItem("cookiesAccepted", "true");

    // Add success animation
    const acceptButton = cookieBanner.querySelector(".btn-primary");
    if (acceptButton) {
      acceptButton.innerHTML = '<span class="cookie-icon">✅</span>Accepted!';
      acceptButton.style.background =
        "linear-gradient(135deg, var(--success-color) 0%, #4CAF50 100%)";
    }

    // Hide banner with smooth animation
    cookieBanner.style.transform = "translateY(100%)";
    cookieBanner.style.opacity = "0";

    setTimeout(() => {
      cookieBanner.style.display = "none";

      // Dispatch custom event for other scripts
      window.dispatchEvent(new CustomEvent("cookiesAccepted"));
    }, 400);
  } catch (error) {
    console.error("Error accepting cookies:", error);
    // Fallback: hide banner immediately
    cookieBanner.style.display = "none";
  }
}

// Initialize cookie banner when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the banner
  initCookieBanner();
});

// Make acceptCookies function globally available
window.acceptCookies = acceptCookies;

// Export for module systems if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initCookieBanner,
    acceptCookies,
  };
}
