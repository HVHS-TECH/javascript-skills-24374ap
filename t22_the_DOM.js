const player = document.getElementById("player");
const game = document.getElementById("game");
const scoreText = document.getElementById("score");

let lane = 0;
let jumping = false;
let score = 0;

const lanePositions = [40, 175, 310];

function updatePlayer() {
  player.style.left = lanePositions[lane] + "px";
}

function spawnObstacle() {
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");

  const obstacleLane = Math.floor(Math.random() * 3);
  obstacle.style.left = lanePositions[obstacleLane] + "px";

  game.appendChild(obstacle);

  let pos = -50;

  const move = setInterval(() => {
    pos += 5;
    obstacle.style.top = pos + "px";

    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      alert("Game Over! Score: " + score);
      location.reload();
    }

    if (pos > 600) {
      score++;
      scoreText.textContent = "Score: " + score;
      obstacle.remove();
      clearInterval(move);
    }
  }, 20);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && lane > 0) {
    lane--;
    updatePlayer();
  }

  if (e.key === "ArrowRight" && lane < 2) {
    lane++;
    updatePlayer();
  }

  if (e.key === "ArrowUp" && !jumping) {
    jumping = true;
    player.style.bottom = "150px";

    setTimeout(() => {
      player.style.bottom = "50px";
      jumping = false;
    }, 500);
  }
});

updatePlayer();
setInterval(spawnObstacle, 1200);
