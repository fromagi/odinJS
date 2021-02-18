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
	const gameBoard = {
		values: [],
		spaces: 9
	};
	function resetBoard() {
		for(let i = 0; i < gameBoard.spaces; i++){
			gameBoard.values[i] = null;
			console.log(gameBoard.values[i])
			displayController.updateBoard(i, gameBoard.values[i]);
		}	
		console.log(gameBoard.values);
	}
	function makeMove(location, marker) {
		if (location <= 8 && (marker == "X" || marker == "O")) {
			gameBoard.values[location] = marker;
			displayController.updateBoard(location, marker);
		} else {
			console.log('Invalid input');
		}
	}
	return {
		resetBoard: resetBoard,
		makeMove: makeMove,
		spaces: gameBoard.values
	};
})();

// Module for DOM display
const displayController = (function() {
	function updateBoard(position, symbol) {
		console.log('Starting to update board')
		const targetSpace = document.querySelector(`#box${position}`);
		console.log(`Updating at location ${ targetSpace.id }`)
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
		let newName = '';
		let nameText = '';
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
			inputP1.innerText = `Name: ${ newName }`
			nameText = 'inputP1'
		}
		else if (nameTarget.match(/2{1}$/)) {
			player2.changeName(newName);
			inputP2.innerText = `Name: ${ newName  }`
			nameText = 'inputP2'
		}
		// Hide input form after submission
		const nameForm = document.getElementById(`${ nameTarget }`)
		nameForm.classList.toggle('element-hide');
		// Show submitted name
		const nameDisplay = document.getElementById(`${ nameText }`)
		nameDisplay.classList.toggle('element-hide');
	}

	// Toggle back to form on name click
	nameDisplays = document.querySelectorAll('.name-display');
	Array.from(nameDisplays).forEach(function(nameDisplay) {
		nameDisplay.addEventListener('click', changeName);
	});
	function changeName(event) {
		event.preventDefault();
		let toggledForm = '';
		const targetPlayer = document.getElementById(event.target.id);
		targetPlayer.classList.toggle('element-hide');
		if(event.target.id.match(/1{1}$/)) {
			toggledForm = document.getElementById('form-p1');
		}
		else if(event.target.id.match(/2{1}$/)) {
			toggledForm = document.getElementById('form-p2');
		}
		toggledForm.classList.toggle('element-hide');
	}

	return {
		updateBoard: updateBoard
	}
})();



