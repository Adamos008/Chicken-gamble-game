import WinLosePopUp from "./WinLosePopUp.js";
const { WinPopUp, LosePopUp } = WinLosePopUp;

const player = document.querySelector('.player');
const cars = document.querySelectorAll('.car');

function isColliding(a, b){
    const rectA = a.getBoundingClientRect();
    const rectB= b.getBoundingClientRect();

    return !(
         rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top ||
        rectA.left > rectB.right ||
        rectA.right < rectB.left
    );
}

function gameLoop() {
  cars.forEach(car => {
    if (isColliding(player, car)) {
      // Přidání png smrti
      LosePopUp();
    }
  });

  requestAnimationFrame(gameLoop);
}

gameLoop();

export default isColliding;