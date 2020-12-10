let safety = false; //Prevents player from "shooting" without starting the game
let rounds;
let playerOne = "Player 1";
let playerTwo;
let p1Buttons = document.querySelectorAll(".movs1");
let allMoves = document.querySelectorAll(".movs1, .movs2");
let table = document.querySelector("#scoreLog");
let streaker;
let result;
let prevResult;
let p1Move;
let p2Move;

checkTable();

function checkTable() {
	if(table.rows.length == 1) {
		document.querySelector("#soloCell").style.cssText = "font-size: 1.5rem; text-align: center;";
		soloCell.innerHTML = "<h6>Good luck!</h6>Click the start button to begin.";
	} else {
		document.querySelector("#soloCell").style.cssText = "color:white; background-color:black; text-align: center;";
		soloCell.innerText = ".: Start of Game :."
	}
}

window.onload = getRounds;

p1input.addEventListener('submit', setName1);
/*
 * SET P1 NAME
 */
function setName1(event) {
	event.preventDefault();				
	if (document.querySelector('#p1name').value.length != 0) {
		playerOne = document.querySelector('#p1name').value;
	}
	else {
		playerOne = 'Player 1';
	}
	let element = document.querySelector('#name1');
	element.innerText = `${ playerOne }`;
}

reset.addEventListener('click', resetScore)
/*
 * RESET SCOREBOARD
 */
function resetScore(){
	win = 0;
	lose = 0;
	tie = 0;
	i = 1;
	streaker = 0;
	streakBoi.innerText = `${ streaker }`;
	delete moveOne;
	updateScore();
	while(table.rows.length > 1) {
		  table.deleteRow(0);
		  
	}
	checkTable();
}

roundsNo.addEventListener('submit', getRounds);
/*
 * SET ROUND NUMBER
 */
function getRounds(event) {
	event.preventDefault();
	if (document.querySelector("#rounds").value.length != 0) {
		rounds = parseInt(document.querySelector("#rounds").value)
	}
	else {
		rounds = Infinity;
	}
	safety = false;
	let element = document.querySelector('#bestOf')
	element.innerHTML = `Best of: ${ rounds }`;
	statusText.innerText = "Click start!"; 		
	console.log(`Rounds updated to: ${ rounds}`);
	resetScore();
	clearHighlights();
}

startGame.addEventListener('click', game);
/*
 * START GAME
 */
function game() {
	//let gameRounds = rounds;
	let p1 = playerOne;
	resetScore()
	clearHighlights()
	console.log(`Starting a game with ${ rounds } rounds between ${ p1 } and name2.`);

	for ( ; i <= rounds; i++) {
		console.log(`Round #${ i }\nFIGHT!`)
		safety = true;
		playRound();
	}
	
	console.log("END OF GAME");
}

shoot1.addEventListener('click', resolveRound);
/*
 * PLAY ROUND 
 */
function playRound() {
	statusText.innerText = "Pick a move!"; 
	if (safety == true) {
		computerPlay();
		p1Choice();
		resolveRound();
		}
}

/*
 * GET P1 MOVE
 */

var p1Play = new Promise(resolve => {
	resolve(p1Buttons.forEach(item => {
		item.addEventListener('focus', function(event) {
			moveOne = event.target.id.substr(0, event.target.id.length -1);
			if (safety == true){statusText.innerText = "Click shoot!";}		
		});	
	}));	
});

async function p1Choice() {
	if (typeof(moveOne) == "undefined") {
		console.log(`Gathering P1 input...`);
	} else {
		console.log(`P1 input is gathered.`);
	}
	if (safety == true) {
		return await p1Play;
	}
}

/*
 * GET P2 MOVE (COMP)
 */

function computerPlay() {
	let x = Math.floor(Math.random() * 3);

	if (x == 0) {
		moveComp = "rock";
	}
	else if (x == 1) {
		moveComp = "paper";
	}
	else {
		moveComp = "scissors";
	}
	console.log(`Computer move generated.`);
};

/*
 * DETERMINE ROUND WINNER AND RESET FOR NEXT ROUND
 */

function resolveRound(){
	if ((moveOne == "rock" && moveComp == "scissors") || (moveOne == "paper" && moveComp == "rock") || 
			(moveOne == "scissors" && moveComp == "paper")) {
		result = "Player wins!";
			++win;
		}
		else if (moveOne == moveComp) {
			result = "Tie game!";
			++tie;
		}
		else {
			result = "Player loses.";
			++lose;
		}
	console.log(`Player one: ${ moveOne }`);
	console.log(`Player two: ${ moveComp }`);
	console.log(`${ result }`);
	highlightMoves();
	checkStreak();
	updateScore();
	updateLog();
	resetRound();
}

/*
	oldOne = moveOne;
	console.log(`OLD ONE is ${ oldOne }`);
	oldComp = moveComp;	
	console.log(`OLD COMP is ${ oldComp }`);
	clearHighlights();
*/ 





/*
 * UPDATE SCORE
 */
function updateScore(){
	p1Score.innerText = `${ win }`;
	p2Score.innerText = `${ lose }`;
	tieNo.innerText = `${ tie }`;
	if (i > 1) {
		console.log("Updating scoreboard");
	} else {
		console.log("Game is ready");
	}
}

/*
 * SEND SCORE LOG TO TABLE
 */
function updateLog(){
	const row = table.insertRow(0);
	const log = row.insertCell(0);
	checkTable();
	log.innerHTML = `<tr><td><b>ROUND #${ i }: ${ result }</b> (P1: ${ moveOne } vs P2: ${ moveComp })</tr></td>`
}


function clearHighlights() {
	for(let i = 0; i < allMoves.length; i++) {
		if (allMoves[i].classList.contains("selectFlag")) {
			allMoves[i].classList.remove("selectFlag");
		}
	}
}

function highlightMoves() {
	clearHighlights();
	document.querySelector(`#${ moveOne + "1" }`).classList.add("selectFlag");
	document.querySelector(`#${ moveComp + "2" }`).classList.add("selectFlag");
}

function checkStreak(){
	j = i;

	if (j == 1){
		console.log("Initial result set")		
		prevResult = result;
	} else { 
		if (prevResult != result) {
			prevResult = result;
			if (streaker >= 1) {
				table.insertRow(0).insertCell(0).innerHTML = `<tr><td><span style="display:block;float:right;color:red;"><b>Streak broken!!</b> 
					${ streakee } was on a ${ streaker + 1 }-game roll.</span></td></tr>`
			}			
			streaker = 0;
			console.log("Streak broken, reset to 0.")
			document.querySelector("#streakID").innerText = "Results";	
			document.querySelector("#streakBoi").innerText = `${ streaker }`;
		} else {
			streaker++;
			console.log(`Result streak! Counter incremented to ${ streaker }`);
			switch (prevResult) {
				case "Tie game!":
					document.querySelector("#streakID").innerText = "Tie Game"
					streakee = "Nobody";
					break;
				case "Player wins!":
					document.querySelector("#streakID").innerText = "P1 Win"
					streakee = "P1";
					break;
				case "Player loses.":
					document.querySelector("#streakID").innerText = "P2 Win"
					streakee = "P2";
					break;
			}
			document.querySelector("#streakBoi").innerText = `${ streaker + 1 }`;
		}
	}
}

/*
 * RESET ROUND
 */
function resetRound(){
	delete moveOne;
	delete moveComp;
	if (i === rounds) {
		console.log(`END OF GAME\nP1 SCORE: ${ win }\nP2 SCORE: ${ lose }`);
		table.insertRow(0).insertCell(0).innerHTML = `<tr><td><span style="display:block;float:right;color:red;"><b>END OF GAME!!</b> 
			(Round ${ i } of ${ rounds })</span></td></tr>`
		safety = false;
		if (win > lose) {
			statusText.innerText = "P1 wins!"; 			
		}
		else if (win < lose){
			statusText.innerText = "P2 wins!"; 		
		} else {
			statusText.innerText = "Draw game!";
		}

	} else {
		console.log(`Resetting game status at the end of round #${ i }.`);
		i++;
		console.log(`Round #${ i }\nFIGHT!!`);
		playRound();
	}

}
