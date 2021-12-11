'use strict';
const number = Math.trunc(Math.random() * 20);
console.log(number);
document.querySelector(`.check`).addEventListener(`click`, function() {
    const guess = document.querySelector(`.guess`).value;
    if (!guess) {
        document.querySelector(`.message`).textContent = `empty`;
        reduce();
    } else if (number > guess) {
        document.querySelector(`.message`).textContent = `too low`;
        reduce();
    } else if (number < guess) {
        document.querySelector(`.message`).textContent = `too high`;
        reduce();
    } else if (number == guess) {
        document.querySelector(`.message`).textContent = `correct answer`;
        finish();
    }
});
document.querySelector(`.again`).addEventListener(`click`, function() {
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value = ``;
    document.querySelector(`.message`).textContent = `start guessing...`;
    document.querySelector(`.score`).textContent = 20;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
    const number = Math.trunc(Math.random() * 20);

});

function reduce() {
    var score = Number(document.querySelector(`.score`).textContent);
    document.querySelector(`.score`).textContent = score -= 1;
}

function finish() {

    const score = Number(document.querySelector(`.score`).textContent);

    var highscore = Number(document.querySelector(`.highscore`).textContent);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = number;

    if (highscore < score) {
        highscore = score;
    }
    document.querySelector(`.highscore`).textContent = highscore;

}