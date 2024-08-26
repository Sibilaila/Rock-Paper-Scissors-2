
let score = JSON.parse(localStorage.getItem('score')) || {
wins: 0,
losses: 0,
ties: 0
};
update();

let isAutoPlay=false;
let interval;

function autoPlay(){
  if(!isAutoPlay){
    interval=setInterval(function(){
      const player=pick();
      play(player);
    },1000);
    isAutoPlay=true;
  }else{
clearInterval(interval);
isAutoPlay=false;
  }

}

function play(playerMove){
const move=pick();
let result=' ';

if (playerMove==='scissors'){
 if(move==='rock'){
 result='You lose';
} else if(move==='paper'){
 result='You win';
} if(move==='scissors'){
 result='Tie';
}
}else if(playerMove==='paper'){
if(move==='rock'){
     result='You win';
   } else if(move==='paper'){
     result='Tie';
   } if(move==='scissors'){
     result='You lose';
   }
}else if(playerMove==='rock'){
if(move==='rock'){
     result='Tie';
   } else if(move==='paper'){
     result='You lose';
   } if(move==='scissors'){
     result='You win';
   }
}
if(result === 'You win'){
score.wins += 1;
}else if(result==="You lose"){
score.losses += 1;
}else if( result==='Tie'){
score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

update();

document.querySelector('.js-result').
innerHTML= result;

document.querySelector('.js-moves').
innerHTML=`you <img src="image/${playerMove}-emoji.png" class="icon">
<img src="image/${move}-emoji.png" class="icon"> Computer`;

}

function update(){
document.querySelector('.js-score')
.innerHTML=` Wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties}`;
}

function pick(){
const num = Math.random();
let move='';
if(num>0 && num<1/3){
move='rock';
}else if(num > 1/3 && num < 2/3){
move='paper';
}else if(num > 2/3 && num <1){
move='scissors';
}
return move;
}
