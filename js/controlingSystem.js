import { generateGamePath, maxTiles } from "./generatingGamePath.js";
import WinLosePopUp from "./WinLosePopUp.js";
const { WinPopUp, LosePopUp } = WinLosePopUp;
import checkScroll from "./checkScroll.js";

const channels = document.querySelectorAll('.channel');
const player = document.querySelector('.player');
const roadBlock = document.querySelectorAll('.road-block');
const cars = document.querySelectorAll('.car');

let generatedPath = generateGamePath(maxTiles);
let currentIndex = 0;

console.log(generatedPath);

function win(){
    player.style.transform = `translateX(${(currentIndex + 1) * 200}px)`;
    WinPopUp();
}

function handleClick(){
    if(generatedPath[currentIndex] === 0){
        console.log('safe');

        checkScroll();

        multiplyingBet();

        roadBlock[currentIndex].style.display = 'block';
        channels[currentIndex].src = './img/ChannelGold.png';

        player.style.transform = `translateX(${(currentIndex + 1) * 200}px)`;

        channels[currentIndex].removeEventListener('click', handleClick);
        currentIndex++;

        if(currentIndex < channels.length){
            channels[currentIndex].addEventListener('click', handleClick);
        } else {
            console.log('Vyhrál jsi!');
            win();
        }
    } else{
        console.log('not safe!');
        cars[currentIndex].style.top = '1000px';
        player.style.transform = `translateX(${(currentIndex + 1) * 200}px)`;
        channels[currentIndex].src = './img/ChannelGold.png';
        cashOutBtn.setAttribute('disabled', '');
        cashOutBtn.style.cursor = 'not-allowed';
    }
}

channels[currentIndex].addEventListener('click', handleClick);

//Reseting Game
const resetButton = document.getElementById('play-again');

const roadBlocks = document.querySelectorAll('.road-block');
const popUp = document.querySelector('.pop-up');
const board = document.querySelector('.board');

function resetEverything() {   
    player.style.transform = "translateX(0px)";
    
    inputBetAmount.value = '';

    moneyText.forEach((text) => {
        text.innerHTML = 'XXX';
    });
    
    channels.forEach((channel) => {
        channel.src = './img/Channel.png';
        channel.removeEventListener("click", handleClick);
    });
    
    roadBlocks.forEach((roadBlock) => {
        roadBlock.style.display = 'none';
    });
    
    cars.forEach((car) => {
        car.style.top = '-500px';
    });
    
    popUp.style.display = 'none';
    board.scrollLeft = 0;
    
    generatedPath = generateGamePath(maxTiles);
    console.log(generatedPath);
    
    currentIndex = 0;
    channels[currentIndex].addEventListener("click", handleClick);
    
    cashOutBtn.setAttribute('disabled', '');
    cashOutBtn.style.cursor = 'not-allowed';
    
    inputBet.removeAttribute('disabled');
    startGameBtn.removeAttribute('disabled');
    startGameBtn.style.cursor = 'pointer';
    
    lockDiv.style.display = 'flex';
}

resetButton.addEventListener('click', () => {
    resetEverything();
});

// Betting System
const money = document.getElementById('money');
const inputBet = document.getElementById('input-bet');
const inputBetAmount = document.getElementById('input-bet-amount');
const lockDiv = document.querySelector('.lock');
lockDiv.style.width = board.scrollWidth + 'px';

const startGameBtn = document.getElementById('start-game');
const cashOutBtn = document.getElementById('cash-out');
cashOutBtn.setAttribute('disabled', '');
cashOutBtn.style.cursor = 'not-allowed';

const moneyText = document.querySelectorAll('.money-text');

let moneyAmount = 2000;
let betAmount = 0;
let baseBet = 0;
let multiplier = 1;
let multiplierForText = 1;

money.innerHTML = moneyAmount;

startGameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.style.display = 'none';

    const wantedBet = Number(inputBet.value);
    if (wantedBet > 0 && wantedBet <= moneyAmount) {
        inputBet.setAttribute('disabled', '');
        startGameBtn.setAttribute('disabled', '');
        startGameBtn.style.cursor = 'not-allowed';

        cashOutBtn.removeAttribute('disabled');
        cashOutBtn.style.cursor = 'pointer';

        lockDiv.style.display = 'none';
        moneyAmount -= wantedBet;
        money.innerHTML = moneyAmount;
        betAmount = wantedBet;
        baseBet = wantedBet;
        inputBetAmount.value = betAmount;
        inputBet.value = '';
        multiplier = 1;
        multiplierForText = 1;

        for (let i = 0; i < moneyText.length; i++) {
        let multiplierPreview = Math.pow(1.1, i + 1);
        let previewValue = Math.round(wantedBet * multiplierPreview);
        moneyText[i].innerHTML = previewValue;
        }
    }
});

function multiplyingBet() {
    multiplier *= 1.1;
    betAmount = Math.round(baseBet * multiplier);
    inputBetAmount.value = betAmount;
    console.log('Multiplier:', multiplier, 'Bet:', betAmount);
}

cashOutBtn.addEventListener('click', () => {
    moneyAmount = moneyAmount + Number(inputBetAmount.value);
    money.innerHTML = moneyAmount;
    console.log(moneyAmount);

    resetEverything();
});