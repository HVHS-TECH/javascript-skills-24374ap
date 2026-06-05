const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

const gameStyles = document.createElement("style");
gameStyles.textContent = `
  body {
    margin: 0;
    overflow: hidden;
    background: #0f1923;
    font-family: Arial, sans-serif;
    color: white;
  }

  #gameArea {
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  #score {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 30px;
    font-weight: bold;
    z-index: 1;
  }

  .enemy {
    width: 60px;
    height: 60px;
    background: #ff4655;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    box-shadow: 0 0 20px #ff4655;
    transition: 0.1s;
  }

  .enemy:hover {
    transform: scale(1.1);
  }
`;

document.head.appendChild(gameStyles);

let score = 0;

function spawnEnemy() {
  const enemy = document.createElement("div");
  enemy.classList.add("enemy");

  enemy.style.left = Math.random() * (window.innerWidth - 60) + "px";
  enemy.style.top = Math.random() * (window.innerHeight - 60) + "px";

  enemy.addEventListener("click", () => {
    score += 1;
    scoreText.textContent = "Score: " + score;
    enemy.remove();
  });

  gameArea.appendChild(enemy);

  setTimeout(() => {
    if (enemy.parentNode) {
      enemy.remove();
    }
  }, 1500);
}

setInterval(spawnEnemy, 800);