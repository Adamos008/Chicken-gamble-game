function checkScroll() {
    const gameBoard = document.querySelector('.board');
    const player = document.querySelector('.player');
    const playerRect = player.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Vzdálenost hráče od pravého okraje viewportu
    const distanceRight = viewportWidth - playerRect.right;

    if (distanceRight < 400) {
        gameBoard.scrollTo({
            left: gameBoard.scrollLeft + 400,
            behavior: "smooth"
        });
    }
}

export default checkScroll;
