import { maxTiles } from "./generatingGamePath.js";

const gameboard = document.querySelector('.board');
const finish = document.querySelector('.finish');

function generatingGameboard(){
    let road = document.createElement('div');
    road.classList.add('road');

    let car = document.createElement('img');
    car.classList.add('car');
    car.src = './img/cars/Car' + Math.floor(Math.random() * 3) + '.png';

    let roadBlock = document.createElement('img');
    roadBlock.classList.add('road-block');
    roadBlock.src = './img/RoadBlock.png';

    let channel = document.createElement('img');
    channel.classList.add('channel');
    channel.src = './img/Channel.png';

    let moneyText = document.createElement('h1');
    moneyText.classList.add('money-text');
    moneyText.innerHTML = 'XXX';

    road.appendChild(car);
    road.appendChild(roadBlock);
    road.appendChild(channel);
    road.appendChild(moneyText);

    gameboard.insertBefore(road, finish);
}

for (let i = 0; i < maxTiles; i++) {
    generatingGameboard();
}