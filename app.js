window.addEventListener('load', init);

let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words =[
    'many',
    'writing',
    'exercise',
    'whether',
    'application',
    'creating',
    'speech',
    'weeping',
    'connected',
    'speech',
    'violently',
    'kindness',
    'standing',
    'darkness',
    'something',
    'goodbye',
    'disrespectfully',
    'lightning',
    'trimmings',
    'tempered',
    'fervently',
    'swiftness',
    'melancholy',
    'merchant',
    'mythology',
    'meanings',
    'Whatever',
    'character',
    'unexpected',
    'literary',
    'fiction',
];

function init() {
    showWords(words);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
    wordInput.addEventListener('input', startMatch);
}

function startMatch() {
    if (matchWord()) {
        isPlaying = true;
        time = 6;
        showWords(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}

function matchWord() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!';
        return true;
    } else {
        message.innerHTML = '!!';
        return false;
    }
}

function showWords(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}