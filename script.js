// Hide the logo image if it fails to load
const logo = document.querySelector(".logo");
if (logo.complete && logo.naturalWidth === 0) {
  logo.style.display = "none";
} else {
  logo.addEventListener("error", () => {
    logo.style.display = "none";
  });
}
