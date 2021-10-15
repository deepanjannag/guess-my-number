'use strict';
//let rndNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let rndNum = Math.trunc(Math.random() * 20) + 1;

const scoreObj = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {
    let guessedNumber = Number(document.querySelector('.guess').value);

    //if guessed number is wrong
    if (guessedNumber != rndNum) {
        if (guessedNumber < rndNum)
            document.querySelector('.message').innerText = 'Too small';
        else
            document.querySelector('.message').innerText = 'Too large';

        scoreObj.innerText = scoreObj.innerText - 1;
    }
    else    //if guessed number is correct
    {
        document.querySelector('.message').innerText = '🥂Congrats!';

        if ((document.querySelector('.highscore').innerText) < Number(scoreObj.innerText))
            document.querySelector('.highscore').innerText = Number(scoreObj.innerText);
    }
});

document.querySelector('.again').addEventListener('click', function () {
    scoreObj.innerText = 20;
    document.querySelector('.guess').value = '';
    rndNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

});