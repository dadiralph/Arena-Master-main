document.getElementById("learnMoreBtn").addEventListener("click", function () {
    document.getElementById("learnMoreModal").style.display = "flex";
  });
  document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("learnMoreModal").style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("learnMoreModal")) {
      document.getElementById("learnMoreModal").style.display = "none";
    }
  });