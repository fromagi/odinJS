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

// Module for game instance
const newGame = (function() {
	const gameBoard = {
		values: [],
		spaces: 9
	};
	function resetBoard() {
		for(let i = 0; i < gameBoard.spaces; i++){
			gameBoard.values[i] = null;
		}	
		console.log(gameBoard.values);
	}
	function makeMove(location, marker) {
		gameBoard.values[location] = marker;
	}
	return {
		resetBoard: resetBoard,
		makeMove: makeMove,
		spaces: gameBoard.values
	};
})();

// Module for DOM display
const displayController = (function() {
	console.log(`Game Array: ${ newGame.spaces }`)
})();



