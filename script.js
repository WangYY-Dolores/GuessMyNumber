'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No number input!';
    } else if ( guess === randomNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = randomNumber;

        document.querySelector('body').style.backgroundColor = 'pink';
        document.querySelector('.number').style.width = '30rem'
    } else if (guess > randomNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose!';
        }
        
    } else if (guess < randomNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose!';
        }
        
    }
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '30rem';
})

