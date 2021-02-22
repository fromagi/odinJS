// Factory for player generator
const Player = (name) => {
	let wins = 0;
	let playerName = name;
	const getName = () => playerName;
	const changeName = (name) => playerName = name;
	const getWins = () => wins;
	const addToWins = () => wins++;
	return {getName, changeName, getWins, addToWins}
}

// Create objects for p1 and p2
const player1 = Player("Player One");
const player2 = Player("Player Two");

// Module for game instance
const thisGame = (function() {
	let p1Turn = true;
	let p2AI = false;
	let gameOver = false;
	const resetButton = document.getElementById("btn-reset");
	const gameBoard = {
		values: [],
		spaces: 9
	};
	function setBoard() {
		for(let i = 0; i < gameBoard.spaces; i++){
			gameBoard.values[i] = null;
		}	
	}
	function resetBoard() {
		for(let i = 0; i < gameBoard.spaces; i++){
			gameBoard.values[i] = null;
			displayController.updateBoard(i, gameBoard.values[i]);
		}	
		const gameSpaces = document.querySelectorAll(".spaces");
		Array.from(gameSpaces).forEach(function(div) {
			div.style.pointerEvents = "";
		});
		thisGame.p1Turn = true;
		thisGame.gameOver = false;
		displayController.updateBanner("TIC-TAC-TOE, ready GO!");
		resetButton.classList.remove("pulseBtn")
	}
	function makeMove(location, marker) {
		if ((location <= 8 && (marker == "X" || marker == "O")) && gameBoard.values[location] == null) {
			gameBoard.values[location] = marker;
			thisGame.turnTracker();
			displayController.updateBoard(location, marker);
			thisGame.gameOverCheck();
			if (thisGame.p2AI && thisGame.gameOver == false) {
				skyNet();
			}
		} else {
			console.error("Invalid input");
		}
	}
	function turnTracker() {
		thisGame.p1Turn = !thisGame.p1Turn;
	}
	function gameOverCheck() {
		const notNull = (arrayValue) => arrayValue != null;
		const winsP1 = document.getElementById("count-p1");
		const winsP2 = document.getElementById("count-p2");
		if (
			// Horizontal Win Conditions
			((thisGame.spaces[0] == thisGame.spaces[1]) && (thisGame.spaces[0] == thisGame.spaces[2]) && thisGame.spaces[0] != null) ||
			((thisGame.spaces[3] == thisGame.spaces[4]) && (thisGame.spaces[3] == thisGame.spaces[5]) && thisGame.spaces[3] != null) ||
			((thisGame.spaces[6] == thisGame.spaces[7]) && (thisGame.spaces[6] == thisGame.spaces[8]) && thisGame.spaces[6] != null) ||
			// Vertical Win Conditions
			((thisGame.spaces[0] == thisGame.spaces[3]) && (thisGame.spaces[0] == thisGame.spaces[6]) && thisGame.spaces[0] != null) ||
			((thisGame.spaces[1] == thisGame.spaces[4]) && (thisGame.spaces[1] == thisGame.spaces[7]) && thisGame.spaces[1] != null) ||
			((thisGame.spaces[2] == thisGame.spaces[5]) && (thisGame.spaces[2] == thisGame.spaces[8]) && thisGame.spaces[2] != null) ||
			// Diagonal (Left) Win Condition
			((thisGame.spaces[0] == thisGame.spaces[4]) && (thisGame.spaces[0] == thisGame.spaces[8]) && thisGame.spaces[0] != null) ||
			// Diagonal (Right) Win Condition
			((thisGame.spaces[2] == thisGame.spaces[4]) && (thisGame.spaces[2] == thisGame.spaces[6]) && thisGame.spaces[2] != null)
		) {
			thisGame.gameOver = true;
			const gameSpaces = document.querySelectorAll(".spaces");
			Array.from(gameSpaces).forEach(function(div) {
				div.style.pointerEvents = "none";
			});
			if (thisGame.p1Turn) {
				displayController.updateBanner(`${ player2.getName() } Wins!`);
				player2.addToWins();
				winsP2.innerText = player2.getWins();
			} else {
				displayController.updateBanner(`${ player1.getName() } Wins!`);
				player1.addToWins();
				winsP1.innerText = player1.getWins();
			}
			resetButton.classList.add("pulseBtn");
		} else if (thisGame.spaces.every(notNull)) {
			thisGame.gameOver = true;
			displayController.updateBanner("Tie Game!")
			const gameSpaces = document.querySelectorAll(".spaces");
			Array.from(gameSpaces).forEach(function(div) {
				div.style.pointerEvents = "none";
			});
			resetButton.classList.add("pulseBtn");
		}/* else {
			console.log("No winner yet...")
		} */
	}
	function skyNet() {
		const aiChoice = Math.floor(Math.random() * 9);
		if (thisGame.spaces[aiChoice] != null) {
			skyNet();
		} 
		else if (!thisGame.p1Turn) {
			thisGame.gameOverCheck();
			setTimeout(() => {thisGame.makeMove(aiChoice, "O")}, 500);
		}
	}
	return {
		p1Turn: p1Turn,
		p2AI: p2AI,
		setBoard: setBoard,
		resetBoard: resetBoard,
		makeMove: makeMove,
		turnTracker: turnTracker,
		gameOverCheck: gameOverCheck,
		gameOver: gameOver,
		spaces: gameBoard.values,
		skyNet: skyNet
	};
})();

// Module for DOM display
const displayController = (function() {
	function updateBoard(position, symbol) {
		const targetSpace = document.querySelector(`#box${position}`);
		targetSpace.innerText = symbol;
	}

	const nameForms = document.querySelectorAll(".players");
	Array.from(nameForms).forEach(function(div) {
		div.addEventListener("submit", setName)
	});

	function setName(event) {
		event.preventDefault();
		const nameTarget = event.target.id;
		const nameInput = document.getElementById(`${ nameTarget }`).elements[0].value;
		let newName = "";
		let nameText = "";
		// Update player names upon submission
		if (nameInput.length != 0) {
			newName = nameInput;
		} else {
			if (nameTarget.match(/1{1}$/)) {
				newName = "Player One"
			}
			else if (nameTarget.match(/2{1}$/)) {
				newName = "Player Two"
			}
		}
		if (nameTarget.match(/1{1}$/)) {
			player1.changeName(newName);
			inputP1.innerHTML = `<b>Name: </b>${ newName }`
			nameText = "inputP1"
		}
		else if (nameTarget.match(/2{1}$/)) {
			player2.changeName(newName);
			inputP2.innerHTML = `<b>Name: </b>${ newName  }`
			nameText = "inputP2"
		}
		// Hide input form after submission
		const nameForm = document.getElementById(`${ nameTarget }`)
		nameForm.classList.toggle("element-hide");
		// Show submitted name
		const nameDisplay = document.getElementById(`${ nameText }`)
		nameDisplay.classList.toggle("element-hide");
	}

	// Toggle back to form on name click
	nameDisplays = document.querySelectorAll(".name-display");
	Array.from(nameDisplays).forEach(function(nameDisplay) {
		nameDisplay.addEventListener("click", changeName);
	});
	function changeName(event) {
		event.preventDefault();
		let toggledForm = "";
		const targetPlayer = document.getElementById(event.target.id);
		targetPlayer.classList.toggle("element-hide");
		if(event.target.id.match(/1{1}$/)) {
			toggledForm = document.getElementById("form-p1");
		}
		else if(event.target.id.match(/2{1}$/)) {
			toggledForm = document.getElementById("form-p2");
		}
		toggledForm.classList.toggle("element-hide");
	}

	// Generate gameboard
	function generateBoard() { 
		const gameBoard = document.getElementById("game-board");
		if (!document.querySelector(".spaces")) {
			for (let i = 0; i < thisGame.spaces.length; i++) {
				const newDiv = document.createElement("div");
				gameBoard.appendChild(newDiv);
				newDiv.id = `box${ i }`;
				newDiv.classList.add("spaces");
				newDiv.addEventListener("click", playerMove);
			}
		} else {
			console.error("Board already generated.")
		}
	}
	
	// Make move on click
	function playerMove(event) {
		movePosition = event.target.id.slice(3);
		let char = "";
		if (thisGame.p1Turn) {
			char = "X";
		} else {
			char = "O";
		}
		thisGame.makeMove(movePosition, char);
		thisGame.gameOverCheck();
	}

	// Update banner info
	function updateBanner(text) {
		const gameBanner = document.getElementById("game-info");
		gameBanner.innerText = text;
	}

	// AI Slider
	const aiSlider = document.getElementById("switch-ai");
	aiSlider.addEventListener("change", toggleAI);

	// Toggle AI Logic for P2
	function toggleAI() {
		thisGame.p2AI = !thisGame.p2AI;
		const aiStatus = document.getElementById("ai-status");
		if (thisGame.p2AI) {
			aiStatus.innerText = "ENABLED";
			thisGame.resetBoard();
			updateBanner("P2 Computer Logic Enabled");
		}
		else if (!thisGame.p2AI) {
			aiStatus.innerText = "DISABLED"
			thisGame.resetBoard();
			updateBanner("P2 Computer Logic Disabled");
		}
	}



	return {
		generateBoard: generateBoard,
		updateBoard: updateBoard,
		updateBanner: updateBanner
	}
})();

window.onload = onloadActions();

function onloadActions() {
	thisGame.setBoard();
	displayController.generateBoard();
	
}


