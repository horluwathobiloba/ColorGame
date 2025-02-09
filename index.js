document.addEventListener("DOMContentLoaded", function () {
    let startGame = document.getElementById("startGame");
    let resetGame = document.getElementById("resetGame");
    let highScore = document.getElementById("highScore");
    let soundSettings = document.getElementById("soundSettings");
    let rules = document.getElementById("rules");

    if (startGame) {
        startGame.addEventListener("click", function () {
            window.location.href = "game.html";
        });
    }

    if (highScore) {
        highScore.addEventListener("click", function () {
            window.location.href = "highscore.html";
        });
    }

    if (soundSettings) {
        soundSettings.addEventListener("click", function () {
            window.location.href = "sound.html";
        });
    }

    if (rules) {
        rules.addEventListener("click", function () {
            window.location.href = "rules.html";
        });
    }

    

});



