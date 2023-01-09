'use strict'
let scoreEl1 = document.getElementById('score--0');
let scoreEl2 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

let curScore1 = document.querySelector('#current--0');
let curScore2 = document.querySelector('#current--1');

let activepl= 0;

const score = [0,0]

let curScore= 0;
btnRoll.addEventListener('click', diceRoll);
function diceRoll(){
    
    let ranNum = Math.trunc(Math.random()*6)+1;
    dice.src = `dice-${ranNum}.png`;
    console.log(ranNum);
    if(ranNum!==1){
        curScore+=ranNum;
        document.querySelector(`#current--${activepl}`).textContent=curScore;
    }
    else{
        curScore=0;
        document.querySelector(`#current--${activepl}`).textContent=0;
        document.querySelector(`#current--${activepl}`).textContent=0;
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
    activepl= activepl===0?1:0;
    }
}

btnHold.addEventListener('click', hold)
function hold(){
    score[activepl]+=curScore
    document.getElementById(`score--${activepl}`).textContent=score[activepl];
    curScore=0;
    document.querySelector(`#current--${activepl}`).textContent=0;
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
    activepl= activepl===0?1:0;
}