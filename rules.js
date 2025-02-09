document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("backToGame");

    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});