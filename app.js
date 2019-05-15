var scores, roundScore;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//var dice = Math.floor(Math.random()*6)+1;
document.querySelector('.dice').style.display = 'none';

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector(".btn-roll").addEventListener('click',function(){

	var dice = Math.floor(Math.random()*6)+1;

	var diceDom = document.querySelector('.dice');

	diceDom.style.display = "block";
	diceDom.src = 'dice-'+ dice+'.png';


	if(dice !== 1){
		roundScore = roundScore + dice;
		document.querySelector("current-"+activePlayer).textContent = roundScore;
	}

})


