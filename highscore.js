document.addEventListener("DOMContentLoaded", function () {
    const scoreList = document.getElementById("scoreList");
    const backButton = document.getElementById("backToGame");

    // Retrieve high scores from localStorage
    let scores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Display scores
    if (scores.length === 0) {
        scoreList.innerHTML = "<li>No high scores yet.</li>";
    } else {
        scoreList.innerHTML = ""; // Clear previous entries
        scores.forEach((score, index) => {
            let li = document.createElement("li");
            li.textContent = `#${index + 1} - Score: ${score}`;
            scoreList.appendChild(li);
        });
    }

    // Back to game button
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});

function updateScore(newScore) {
    let scores = JSON.parse(localStorage.getItem("highScores")) || [];
    scores.push(newScore);
    scores.sort((a, b) => b - a); // Sort in descending order
    scores = scores.slice(0, 10); // Keep only the top 10 scores
    localStorage.setItem("highScores", JSON.stringify(scores));
}
