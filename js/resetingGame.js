const resetButton = document.getElementById('play-again');

const player = document.querySelector('.player');
const channels = document.querySelectorAll('.channel');
const roadBlocks = document.querySelectorAll('.road-block');
const popUp = document.querySelector('.pop-up');
const board = document.querySelector('.board');

resetButton.addEventListener('click', () => {
    player.style.backgroundColor = 'black';
    player.style.transform = "translateX(0px)";

    channels.forEach((channel) => {
        channel.style.backgroundColor = 'black';
    });

    roadBlocks.forEach((roadBlock) => {
        roadBlock.style.display = 'none';
    });

    popUp.style.display = 'none';
    board.scrollLeft = 0;
});
