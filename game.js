document.addEventListener("DOMContentLoaded", () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let targetColor = "";
    let score = 0;
    let correctButton = null;

    function startGame() {
        targetColor = colors[Math.floor(Math.random() * colors.length)];
        const colorOptionsContainer = document.getElementById("colorOptions");
        colorOptionsContainer.innerHTML = "";

        let shuffledColors = [...colors].sort(() => Math.random() - 0.5);
        shuffledColors.forEach(color => {
            const btn = document.createElement("button");
            btn.classList.add("colorOption");
            btn.setAttribute("data-testid", "colorOption");
            btn.style.backgroundColor = color;
            btn.onclick = () => checkGuess(color, btn);
            colorOptionsContainer.appendChild(btn);
            if (color === targetColor) correctButton = btn;
        });

        // Hide the color box at the start
        const colorBox = document.getElementById("colorBox");
        colorBox.style.display = "none";
        colorBox.style.backgroundColor = ""; 
        
        document.getElementById("gameStatus").textContent = "Guess the correct color!";
    }

    function checkGuess(color, btn) {
        const colorBox = document.getElementById("colorBox");
        colorBox.style.backgroundColor = targetColor;
        colorBox.style.display = "block"; 
        
        if (color === targetColor) {
            document.getElementById("gameStatus").textContent = "✅ Correct!";
            btn.classList.add("correct");
            score++;
        } else {
            document.getElementById("gameStatus").textContent = "❌ Wrong! Try again.";
            btn.classList.add("wrong");
        }

        document.getElementById("score").textContent = score;

        // Automatically restart after 2 seconds
        setTimeout(() => {
            startGame();
        }, 2000);
    }

    function showHint() {
        if (correctButton) {
            correctButton.classList.add("hintAnimation");
            setTimeout(() => correctButton.classList.remove("hintAnimation"), 2000);
        }
    }

    document.getElementById("newGameButton").addEventListener("click", startGame);
    document.getElementById("hintButton").addEventListener("click", showHint);
    
    startGame();
});
