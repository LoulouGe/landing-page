// Hide the logo image if it fails to load (no logo.png yet)
document.querySelector(".logo").addEventListener("error", function () {
  this.style.display = "none";
});
