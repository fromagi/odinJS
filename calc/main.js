/* 
 * GLOBAL FLAGS 
 */
// toggled to continue operating on previous total
let equalCont = false; 	
// triggers log update when true
let sendToLog = false; 	
// handles array val update when using backspace
let editing = false; 	
// triggers the div by 0 response
let zerror = false; 	
// toggles new or existing value for display updates
let newVal;				
// handles sci notation
let expoNum; 			
/* 
 * GLOBAL STORAGE 
 */
// the answer we seek
let total;				
// retains operator from math button press
let operation;			
// retains last operation for chaining off of equals sign
let lastOp;				
// retains last value for chaining off equals sign
let lastVal;			
// passed value to array
let storedVal = 0;		
// why don't you come on over
let valArray = []; 		
// keeps all stages of operation for logging
let logArray = []; 		

// initialize arrays with 0s after emptying (laziness!)
checkZeros(); 			

function checkZeros() {
	if(valArray.length == 0 && storedVal == 0) {
		valArray[0] = 0;
		logArray[0] = 0;
	}
}
/*
 * KEYBOARD INPUT
 */
document.addEventListener('keydown', (e) => {
	let keyPress = e.key;
	if(!isNaN(keyPress)) {
		displayVal(keyPress);
	} else if(keyPress == "."){
		deciPress();
	} else if(keyPress == "Delete") { 
		backSpace();
	} else if(keyPress == "Escape") {
		clearPress();
	} else if(keyPress == "h") {
		toggleHistory();
	} else if(keyPress == "+") {
		mathPress("btnAdd");
	} else if(keyPress == "-") {
		mathPress("btnSub")
	} else if(keyPress == "*") {
		mathPress("btnMult") 
	} else if(keyPress == "/") {
		mathPress("btnDiv")
	} else if(keyPress == "Enter") {
		equalPress();
	}
});

const calcNums = document.querySelectorAll(".numberBtn") 
calcNums.forEach(numBtn => numBtn.addEventListener("click", numberPress));

function numberPress(numBtn) {
	const pressedKey = numBtn.target.innerText;
	const currentVal = pressedKey;
	displayVal(currentVal);
}

const deciBtn = document.querySelector("#btnDeci");
deciBtn.addEventListener("click", deciPress);

function deciPress() {
	if(Number.isInteger(storedVal)) {
		const floatVal = screenVal.innerText + ".";
		screenVal.innerText = floatVal;
	}
}

const negBtn = document.querySelector("#btnNeg");
negBtn.addEventListener("click", negPress);

function negPress() {
	let negVal;
	if(storedVal == 0) {
		negVal = storedVal;
	} else {
		negVal = storedVal * -1;
	}
	newVal = true;
	valArray.pop()
	logArray.pop()
	displayVal(negVal);
	newVal = false;
}

const screenVal = document.querySelector("#calcValue");

function displayVal(input) {
	let comboVal;
	// interrupts parsing to start new number
	if (newVal) {screenVal.innerText = "";}									
	/*
	 * FORMATING FOR NEGATIVE NUMBERS 
	 */
	if(input < 0) {
		comboVal = input.toString();
	} 
	else if (storedVal < 0 || input >= 0) {
		comboVal = screenVal.innerText + input;
	}
	/*
	 * FORMATTING FOR SCIENTIFIC NOTATION 
	 */
	// converts input to sci notation
	if(comboVal.length > 11 && !expoNum) { 									
		const cleanVal = comboVal.replace(/[^0-9.\-]/g, '');
		expoNum = parseFloat(cleanVal)
		storedVal = expoNum;
		displayedVal = storedVal.toExponential(4);
	}
	// adds sci input to existing sci value
	else if((expoNum && !newVal) && (Math.abs(storedVal) > 999999999)) { 	
		expoNum += input;
		storedVal = parseFloat(expoNum);
		displayedVal = storedVal.toExponential(4);
	}
	// syncs up with the float decimal limit
	else if(Math.abs(input) >= 1e21) { 										
		expoNum = input;
		storedVal = expoNum
		displayedVal = expoNum.toExponential(4);
	// default number press 
	} else { 																
		const cleanVal = comboVal.replace(/[^0-9.\-]/g, '');
		storedVal = parseFloat(cleanVal);
		// converts output to sci notation 
		if(Math.abs(storedVal) > 999999999) { 								
			displayedVal = storedVal.toExponential(4);
		} else {
		displayedVal = storedVal.toLocaleString();
		}
	}
	/*
	 * FORMATING FOR DECIMAL NUMBERS
	 */
	// dynamically maximize decimal limit
	if(!Number.isInteger(storedVal) && Math.abs(storedVal) <= 999999999){ 	
		let integerVal = Math.round(storedVal).toLocaleString();
		let limit = 11 - parseInt(integerVal.length);
		let cappedVal = parseFloat(storedVal.toFixed(limit));
		displayedVal = cappedVal.toLocaleString(undefined, { maximumFractionDigits: 11 });
	}
	screenVal.innerText = displayedVal;
	updateVal(storedVal);
}

function updateVal(value) {
	// updates arrays after backspace 
	if(editing) { 															
		valArray.pop();
		valArray.push(value);
		logArray.pop();
		logArray.push(value);
	}
	// pushes second value to valArray (so long as we aren't adding 0 to 0)	
	else if((newVal && !total) && (valArray[0] + value != 0)) { 			
		valArray.push(value); 												
		logArray.push(value);
		newVal = false;
	}
	// resets array w/total as first number
	else if(total && valArray.length > 1) { 						
		valArray.splice(0);
		valArray[0] = value;
	// handles first value
	} else { 														
		valArray.pop();
		valArray.push(value);
		logArray.pop();
		logArray.push(value);
	}
}

const calcMath = document.querySelectorAll(".mathBtn") 
calcMath.forEach(mathBtn => mathBtn.addEventListener("click", mathPress));

function mathPress(mathBtn) {
	let pressedKey;
	// keypress alternative
	if(mathBtn.target === undefined) {
		pressedKey = mathBtn;
	} else {
		pressedKey = mathBtn.target.id;
	}
	newVal = true;
	expoNum = false;
	// handles inline caclulations between operations
	if(valArray.length > 1) { getTotal(); } 						
	operation = pressedKey; 
	logArray.push(signParse(operation));
	// remove obsolete operation presses
	for(i in logArray){
		if(isNaN(logArray[i]) && isNaN(logArray[i-1])){
			logArray.splice((i-1), 1);
		}
	}
}

// lazy translation for history log
function signParse(sign) { 											
	switch(sign) { 													
		case "btnAdd":
			return "+";
		case "btnSub":
			return "-";
		case "btnMult":
			return "&times";
		case "btnDiv":
			return "&divide";
	}
}

const calcTotal = document.querySelector(".equalsBtn") 
calcTotal.addEventListener("click", equalPress);

// get answer and stage for next calculation 
function equalPress(){ 												
	sendToLog = true;
	if(lastOp) {
		equalCont = true;
	}
	if(valArray.length == 1 && equalCont) {
		operation = lastOp;
		logArray.push(signParse(operation));
		valArray[1] = lastVal;
		logArray.push(valArray[1]);
	}
	getTotal();
	sendToLog = false;
}

function getTotal() { 	
	newVal = true;

	// handles div by zero
	if(zerror) { 													
		zerror = false;
		clearPress();
		total = storedVal;
	} 
	// triggers the chosen operation
	else if(operation) { 											
		let doThis = operation.substring(3).toLowerCase();
		window[doThis]();
	}
	// number = number if no operation
	else { 															
		// reset arrays for new chain
		if(valArray.length > 1) { 								
			valArray.shift();
			logArray.shift();
		}
		total = storedVal;
		equalCont = false;
	}
	Math.abs(total) >= 1e21 ? expoNum = true : expoNum = false;
	
	if(sendToLog) { 
		logArray.push("=");
		logArray.push(total);
		updateLog();
	}
	
	lastVal = valArray[1];
	displayVal(total);
	total = 0;
	lastOp = operation;
	operation = null;
}

const calcClear = document.querySelector("#btnClear") 
calcClear.addEventListener("click", clearPress);

function clearPress() {
	newVal = true;
	expo = false;
	storedVal = 0;
	total = 0;
	lastVal = 0;
	lastOp = null;
	screenVal.innerText = storedVal;
	valArray = [];
	logArray = [];
	checkZeros();
}

const backBtn = document.querySelector("#btnDel");
backBtn.addEventListener("click", backSpace);

function backSpace() {
	editing = true;
	newVal = true;
	const cleanVal = storedVal.toString().replace(/[^0-9.\-]/g, '');
	const splitValArray = cleanVal.split("");
	splitValArray.pop();
	let editedVal = splitValArray.toString().replace(/[^0-9.\-]/g,'');
	// single digit deletes to 0									
	if(editedVal.length < 1) { 										
		editedVal = "0";
	} 
	console.log(`Edited to: ${ editedVal }\n${ typeof editedVal }`)
	displayVal(editedVal);
	editing = false;
}

const histBtn = document.querySelector("#btnHist");
histBtn.addEventListener("click", toggleHistory);
const panel = document.querySelector("#historyTab");
let panelStop = document.getElementById("calcShell").offsetWidth;

window.addEventListener('resize', nudgePanel);

function toggleHistory() {
	let children = Array.from(panel.children);
	let newStop = checkWidth(panelStop);
	panel.style.setProperty('--stop', newStop+"px");
	// hide
	if (!panel.style.transform || panel.style.transform == "none") { 	
		children.forEach(child => {
			child.style.display = "hidden";
		});
		panel.style.transition = "transform 1s ease-in-out";
		panel.style.transform = "translate(var(--stop))";
		panel.style.boxShadow = "none";
	// show
	} else {
		children.forEach(child => {
			child.style.display = "flex"; 								
		})
		panel.style.transition = "transform 1s ease-in-out, box-shadow 1s";
		panel.style.transform = "none";
		panel.style.boxShadow = "11px 7px 10px 0 rgba(0,0,0,.35)";
	}
}

function checkWidth(width) {
	let calcWidth = document.getElementById("calcShell").offsetWidth;
	if(width != calcWidth) {
		return calcWidth;
	} else {
		return width;
	} 
}

function nudgePanel() {
	let nudge = checkWidth(panelStop);
	if(panel.style.transform == "translate(var(--stop))") {
		panel.style.removeProperty('transition');
		panel.style.setProperty('--stop', nudge + "px");
	}
}

const table = document.querySelector("#mathLog");
checkTable(); 			// set initial table value

function checkTable() {
	if(table.rows.length == 1) {
		document.querySelector("#soloCell").style.cssText = "text-align: center;";
		soloCell.innerHTML = "Click 'HIST'<br>to hide";
	} else {
		document.querySelector("#soloCell").style.cssText = "text-align: center; background-color: black; height: 1px; margin: 0; padding: 0;";
		soloCell.innerHTML = "Fin"
	}
}

const resetBtn = document.querySelector("#logFooter");
resetBtn.addEventListener("click", resetTable);

function resetTable() {
	while(table.rows.length > 1) {
		  table.deleteRow(0);  
	}
	checkTable();
}

const removeBtn = document.querySelector("#logHeader");
removeBtn.addEventListener("click", removeRow);

function removeRow() {
	if(table.rows.length > 1) {
		table.deleteRow(0);
	}
	checkTable();
}

function updateLog(){
	const row = table.insertRow(0);
	const log = row.insertCell(0);
	checkTable();
	let loggedString = "";
	for(i in logArray){
		if(i == (logArray.length -1)) {
			loggedString += ('<br>' + '<span id="finalValue"><b>'+logArray[i].toString()+'</b></span>');
		}
		// workaround for bug with clearing chained operations (lazy!)
		else if(logArray[i] === undefined) { 						
			loggedString += "";
		} else {
			loggedString += (" " + logArray[i].toString());
		}
	}
	log.innerHTML = `<tr><td>${ loggedString }</tr></td>`
	logArray = [];
	logArray[0] = total;
}

function add() {
	let sum = valArray.reduce((acc, ans) => {
		return acc + ans;
	}, 0);
	total = parseFloat(sum);
}

function sub() {
	let diff = valArray[0] - valArray[1];
	total = parseFloat(diff);
}

function mult() {
	let prod = valArray[0] * valArray[1];
	total = parseFloat(prod);	
}

function div() {
	if(valArray[1] == 0) {
		zerror = true;
		alert("DON'T YOU DARE!");
		getTotal();
	} else {
		let quo = valArray[0] / valArray[1];
		total = parseFloat(quo);
	}
}

function debugCalc() {
	console.log(`STORED: ${ storedVal }`)
	console.log(`Let's math: ${ valArray[0] } ${ operation } ${ valArray[1] }`)
	console.log(`Let's log: ${ logArray }`)
	console.log(`valArray Length: ${ valArray.length }`);
	console.log(`valArray: ${ valArray }`)
}
