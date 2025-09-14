const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up-text');

function WinPopUp(){
    popUpText.innerHTML = 'Win';
    popUp.style.display = 'flex';
}

function LosePopUp(){
    popUpText.innerHTML = 'You Lost!';
    popUp.style.display = 'flex';
}

export default {WinPopUp, LosePopUp};