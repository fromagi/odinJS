const mainBox = document.querySelector("#grid"); 

function getResolution(){
	const selection = prompt("Set the Etch-A-Sketch's resolution by entering a number from 1 to 100:");
	makeGrid(selection);
}

function makeGrid(input){
	clearGrid();	
	mainBox.style.setProperty('--n', input);
	for (i = 1; i <= input; i++) {
		makeRow(input);
	}
}

function makeRow(num) {
	if (num <= 100) {
		for (let j = 1; j <= num; j++) {
			const newDiv = document.createElement("div");
			mainBox.appendChild(newDiv);
			newDiv.id = `box${ i }_${ j }`;
			//console.log(`Iteration #${ j }`);
			newDiv.addEventListener("mouseover", etchBox);
		}
	} else {
		alert("Maximum resolution is 100x100. Please enter a new number.");
	}
}

function etchBox(event) {
	let box = event.target.id;
	let etcher = document.getElementById(box);
	let etch = getComputedStyle(etcher).getPropertyValue('--color');
	if (etch > 0) {
		etch = Math.round((etch - .1) * 10) / 10;
	}
	//console.log(`Mouse is positioned over ${ box } with an etch value of ${ etch }`);
	document.getElementById(box).style.setProperty('--color', etch);
}

function clearGrid() {
	mainBox.innerHTML = '';
}
