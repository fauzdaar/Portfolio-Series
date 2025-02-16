const dino = document.querySelector(".dino");
const obstacle = document.querySelector(".obstacle");
const scoreText = document.querySelector(".score");

let score = 0;
let isJumping = false;

document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump); // Detect touch input

function jump(event) {
    if ((event.code === "Space" || event.type === "touchstart") && !isJumping) {
        isJumping = true;
        dino.style.animation = "jump 0.5s linear";
        setTimeout(() => {
            dino.style.animation = "";
            isJumping = false;
        }, 500);
    }
}

function moveObstacle() {
    obstacle.style.right = "0px";
    let interval = setInterval(() => {
        let obstaclePos = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

        if (obstaclePos > 540 && obstaclePos < 590 && dinoTop < 40) {
            alert("Game Over! Your Score: " + score);
            location.reload();
        }

        if (obstaclePos >= 600) {
            obstacle.style.right = "-50px";
            score++;
            scoreText.textContent = "Score: " + score;
        }
    }, 30);
}

moveObstacle();
