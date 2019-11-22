var scores, roundScore, activePlayer, gamePlaying, winning_score;
var lastDice;
init();

function win_score(){
	winning_score = document.querySelector('.winning_score').value;
	
}

document.querySelector(".btn-roll").addEventListener('click',function(){
	if(gamePlaying){


	var dice1 = Math.floor(Math.random()*6)+1;
	var dice2 = Math.floor(Math.random()*6)+1;

	var diceDom1 = document.querySelector('.dice1');
	var diceDom2 = document.querySelector('.dice2');


	diceDom1.style.display = "block";
	diceDom1.src = 'dice-'+ dice1+'.png';

	diceDom2.style.display = "block";
	diceDom2.src = 'dice-'+ dice2+'.png';


	if(dice1=== 6 && lastDice === 6)
	{
		scores[activePlayer] = 0;
		document.querySelector("#score-"+activePlayer).textContent = '0';
		nextPlayer();
	}

	else if(dice1 !== 1 && dice2 !==1){
		roundScore = roundScore + dice1+ dice2;
		document.querySelector("#current-"+ activePlayer).textContent = roundScore
	}



	else{

			nextPlayer();
	}
	lastDice = dice1;
}
});

function nextPlayer(){
		activePlayer === 0 ? activePlayer =1 : activePlayer =0;
		roundScore = 0;

		document.querySelector('#current-0').textContent = 0;
		document.querySelector('#current-1').textContent = 0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice1').style.display='none';
		document.querySelector('.dice2').style.display='none';

}


document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){


	scores[activePlayer]+= roundScore;
	document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
	if(scores[activePlayer]>=winning_score){

		document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
		document.querySelector('.dice1').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gamePlaying = false;

	}

	else
	{
		nextPlayer();
	}
	}


});

document.querySelector('.btn-new').addEventListener('click', init);


 function init(){

scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
 }
