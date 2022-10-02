const button = document.querySelector ('#button');
let min = -10;
let max = 10;

function getRandomInt(min, max) {
    min = Math.ceil(-10);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt);
button.addEventListener('click',button);