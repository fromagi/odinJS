let myLibrary = [];
const shelf = document.querySelector("#bookShelf");

window.onload = onloadActions();

function onloadActions() {
	console.log("Onload Actions, GO!");
	handleStorage();
	createDelBtns();
}

const bookFactory = (title, author, pageCount, read) => {
	let bookTitle = title;
	let bookAuthor = author;
	let bookPageCount = pageCount;
	let bookRead = read;
	/*
	setReadStatus(read) {
		this.read = read;
		return this;
	};
	*/
	let bookInfo = () => {
		return `${ bookTitle } by ${ bookAuthor }, ${ bookPageCount } pages, ${ bookRead ? "already read" : "not read yet" }.`;
	} 
	return {
		bookTitle,
		bookAuthor,
		bookPageCount,
		get read() {
			return bookRead;
		},
		set read(read) {
			bookRead = read;
		},
		get bookInfo() {
			return bookInfo;
		}
	}
}

/*
class Book {
	constructor(title, author, pageCount, read) {
		this.title = title;
		this.author = author;
		this.pageCount = pageCount;
		this.read = read;
	}
	get readStatus() {
		return this.read;
	}
	set readStatus(newStatus) {
		this.read = newStatus;
	}
	toggleRead() {
		this.read = !this.read;
	}
	info() {
		let readInfo = this.read ? "already read" : "not read yet";
		return `${ this.title } by ${ this.author }, ${ this.pageCount } pages, ${ readInfo }.`;
	}
}
*/

function createDelBtns() {
	const delBtns = document.querySelectorAll(".deleteBook");
	Array.from(delBtns).forEach(function(div) {
		div.addEventListener("click", removeBook);
	});
}

function removeBook(){
	const targetBook = event.target.parentElement.id;
	const targetCard = document.getElementById(targetBook);
	const matchIndex = matchBookTitle(targetBook);
	myLibrary.splice(matchIndex, 1);
	targetCard.remove();
	storeShelf();
}

function matchBookTitle(book) {
	const bookMatch = myLibrary.findIndex(libraryBook => libraryBook.bookTitle.toLowerCase().replace(/ +/g, '-') === book);
	return bookMatch;
}

const submitForm = document.querySelector("#addBookForm");
submitForm.addEventListener("submit", addBook); 

function addBook(event) {
	event.preventDefault();
	new FormData(submitForm);
}

submitForm.addEventListener("formdata", event => {
	const bookData = event.formData;
	const bookValues = [...bookData.values()];
	const newTitle = bookValues[0];
	const newAuthor = bookValues[1];
	const newPageCount = Number(bookValues[2]);
	const newReadStatus = bookValues[3]? true : false;
	const submittedBook = bookFactory(newTitle, newAuthor, newPageCount, newReadStatus);
	addBookToLibrary(submittedBook);
	submitForm.reset();
	toggleForm();
});

function addBookToLibrary(newBook) {
	if(myLibrary.some(item => item.bookTitle.toLowerCase() === newBook.bookTitle.toLowerCase())) {
		alert(`ERROR: A book with the title "${ newBook.title }" already exists.\nPlease edit the new title or delete the existing entry.`)
	} else {
		myLibrary.push(newBook);
	}
	storeShelf();
	updateShelf();
}

function updateShelf() {
	console.log(`Updating book shelf with contents of library`);
	console.table(myLibrary);
	for(let i = 0; i < myLibrary.length; i++ ) {
		const currentBook = myLibrary[i].bookTitle;
		const currentAuthor = myLibrary[i].bookAuthor;
		const currentLength = myLibrary[i].bookPageCount;
		const currentStatus = myLibrary[i].bookRead;
		const bookId = currentBook.toLowerCase().replace(/ +/g, '-');
		const bookElement = document.getElementById(bookId)
		console.log(bookId);
		console.log(`Library Loopin, Lap #${ i }!\nReturning: ${ currentBook }`);
		if(bookElement) {
			console.log(`Book exists with id: ${ bookId }`);
		} else {
			console.log(`Book does NOT exist.\nAdding book id: ${ bookId }`);
			const libraryBook = document.createElement("div");
			libraryBook.className = "bookCard";
			libraryBook.id = bookId;
			libraryBook.innerHTML = `
				<div class="deleteBook">X</div>
				<div class="bookInfo">
					<div class="bookTitle">${ currentBook }</div>
					<div class="bookAuthor">${ currentAuthor }</div>
					<div class="bookLength">${ currentLength } Pages</div>
					<div class="bookStatus">${ currentStatus ? 'Read Already' : 'Not Read Yet' }</div>
				</div>
				<button class="changeToRead">Mark as Read</button>
			`
			shelf.appendChild(libraryBook);
			createDelBtns();
		}

		//console.log(`Looping through books\nBook:${ book }\nTitle:${ book.title }`);
	}
}

const toggleBtn = document.querySelector("#formToggle");
toggleBtn.addEventListener("click", toggleForm)
const bookForm = document.querySelector("#addFormWrapper");

function getWidths() {
	let formWidth = bookForm.scrollWidth;
	let buttonWidth = toggleBtn.scrollWidth;
	let hideVal = buttonWidth - formWidth; 
	//console.log(`formWidth: ${ formWidth }\nbuttonWidth: ${ buttonWidth }\nhideVal: ${ hideVal }`)
	return hideVal;
}

let formHidden = true;
let offsetVal = getWidths();
bookForm.style.setProperty('--formWidth', offsetVal+"px");

function updateOffset() {
	offsetVal = getWidths();
	console.log(`setting offsetVal to ${ offsetVal }`)
	bookForm.style.setProperty('--formWidth', offsetVal+"px");
	return offsetVal;
}

window.addEventListener("resize", nudgeForm);

function nudgeForm() {
	if(formHidden){
		bookForm.style.removeProperty('transition');
		updateOffset();		
	}
}

function toggleForm() {
	let children = Array.from(bookForm.children);
	updateOffset();
	// hide
	bookForm.style.transition = "right 1s ease-in-out, transform 1s ease-in-out";
	if(!formHidden) {
		toggleBtn.innerHTML = "ADD &nbsp; BOOK";
		bookForm.style.transform = "none";
		bookForm.style.right = "var(--formWidth)";
		formHidden = true;
	}
	// show
	else {
		toggleBtn.innerHTML = "HIDE &nbsp; FORM";
		bookForm.style.right = "50%";
		bookForm.style.transform = "translate(46%)";
		formHidden = false;
	}
}

const theHobbit = bookFactory('The Hobbit', 'J.R.R Tolkien', 295, false);

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function handleStorage() {
	console.log("Handling storage");
	if (storageAvailable('localStorage')) {
		console.log("Storage is available");
		if(!localStorage["myLibrary"]) {
			storeShelf();
		} else {
			setShelf();
		}
	}
}

function storeShelf() {
	console.log("Creating storage array");
	localStorage["myLibrary"] = JSON.stringify(myLibrary);
}

function setShelf() {
	if (localStorage["myLibrary"]) {
		console.log("Reading storage array");
		myLibrary = JSON.parse(localStorage["myLibrary"]);
		updateShelf();
	}
}
