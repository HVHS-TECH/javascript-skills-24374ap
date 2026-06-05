/* <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mini Subway Surfers</title>

<style>
body {
    margin: 0;
    overflow: hidden;
    background: skyblue;
    font-family: Arial, sans-serif;
}

#game {
    position: relative;
    width: 400px;
    height: 600px;
    margin: auto;
    background: #555;
    overflow: hidden;
    border: 4px solid black;
}

.lane {
    position: absolute;
    width: 4px;
    height: 100%;
    background: white;
}

#lane1 { left: 133px; }
#lane2 { left: 266px; }

#player {
    position: absolute;
    width: 50px;
    height: 50px;
    background: orange;
    bottom: 50px;
    left: 40px;
    border-radius: 10px;
}

.obstacle {
    position: absolute;
    width: 50px;
    height: 50px;
    background: red;
    top: -50px;
}

#score {
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    z-index: 10;
}
</style>
</head>
<body>

<div id="game">
    <div id="score">Score: 0</div>

    <div class="lane" id="lane1"></div>
    <div class="lane" id="lane2"></div>

    <div id="player"></div>
</div>

<script>
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

document.addEventListener("keydown", e => {
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

setInterval(spawnObstacle, 1200);
</script>

</body>
</html>Paste your code from the last task */