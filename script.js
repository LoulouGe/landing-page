// Hide the logo image if it fails to load
const logo = document.querySelector(".logo");
if (logo && logo.complete && logo.naturalWidth === 0) {
  logo.style.display = "none";
} else if (logo) {
  logo.addEventListener("error", () => {
    logo.style.display = "none";
  });
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
