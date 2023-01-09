
const rolldice= document.querySelector('.roll-dice');
const dice= document.querySelector('.dice');
let dicenum=0, displaydicenum=0;
const curscore1= document.getElementById('curscore1');
const hold= document.querySelector('.hold');
const p1score= document.querySelector('.score1');
let score1=0;
const p2score= document.querySelector('.score2');
let score2=0;

rolldice.addEventListener('click',function(){
    dicenum= Math.trunc(Math.random() * 6) + 1;
    
    dice.src=`/dice-${dicenum}.png`;
    displaydicenum+=dicenum;
    curscore1.textContent=displaydicenum;
})

hold.addEventListener('click', function(){
    score1+=displaydicenum;
    curscore1.textContent = 0;
    p1score.textContent = score1;
})