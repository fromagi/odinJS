// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const pred = document.createElement('p');
	pred.classList.add('pred');
	pred.style.color = 'red';
	pred.textContent = "Hey I'm red!";

const h3ad = document.createElement('h3');
	h3ad.classList.add('h3ad');
	h3ad.style.color = 'blue';
	h3ad.textContent = "I'm a blue h3!";

const bawks = document.createElement('div');
	bawks.classList.add('bawks');
	bawks.setAttribute('style','background-color: pink; border: solid; border-color: black')

const h1ad = document.createElement('h1');
	h1ad.classList.add('h1ad');
	h1ad.textContent = "I'm in a div";

const pawks = document.createElement('p');
	pawks.classList.add('pawks');
	pawks.textContent = "ME TOO!";

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

bawks.appendChild(h1ad);
bawks.appendChild(pawks);


container.appendChild(content);
container.appendChild(pred);
container.appendChild(h3ad);
container.appendChild(bawks);
