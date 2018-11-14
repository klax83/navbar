// Write a function which, given a color code, a set of links, and a boolean, 
// creates a fully responsive fixed-position navbar in a chosen background color
//  with functioning links. The boolean should be used to indicate whether the 
//  navbar theme is to be dark or light.

var links = [
	{
		text: 'Team Page',
		link: 'https://klax83.github.io/ecommerce/',
		img: 'img/company.png',
		about: 'A landing page displaying a buisnesses Team members and positions.'
	},
	{
		text: 'Tab Page',
		link: 'https://klax83.github.io/tabsmk3/',
		img: 'img/tabs.png',
		about: 'A function built to create tabs and display there text.'
	},
	{
		text: 'Quiz Page',
		link: 'https://klax83.github.io/quizApp/',
		img: 'img/quiz.png',
		about: 'A quiz app to test your knowledge of HTML and CSS.'
	},
	{
		text: 'Horoscope Page',
		link: 'https://klax83.github.io/Horoscope/',
		img: 'img/horoscope.png',
		about: 'App that displays your astrological signs coresponding animal.'
	},
	{
		text: 'Portfolio',
		link: 'https://klax83.github.io/portfolio/',
		img: 'img/port.png',
		about: 'A rough draft of my professional portfolio.'
	},

];

function populateHTML() {
	// declare elements
	var nav = document.createElement('nav');
	var logoA = document.createElement('a');
	var butt = document.createElement('button');
	var span = document.createElement('span');
	var divA = document.createElement('div');
	var divB = document.createElement('div');
	var contDiv = document.createElement('div');

	// element attributes
	// nav
	nav.className = 'navbar navbar-expand-md w-100';
	nav.id = 'id';
	nav.style.position = 'fixed';
	// nav.style.backgroundColor = colorCode;
	// home link
	logoA.className = 'navbar-brand';
	logoA.href = 'index.html';
	logoA.textContent = 'Links';
	// logoA.style.color = 'white';
	// button
	butt.className = 'navbar-toggler';
	butt.type = 'button';
	butt.setAttribute('data-toggle', 'collapse');
	butt.setAttribute('data-target', '#navbarNavAltMarkup');
	butt.setAttribute('aria-controls', 'navbarNavAltMarkup');
	butt.setAttribute('aria-expanded', 'false');
	butt.setAttribute('aria-label', 'Toggle navigation');
	// span
	span.className = 'navbar-toggler-icon';
	// divA
	divA.className = 'collapse navbar-collapse';
	divA.id = 'navbarNavAltMarkup';
	// divB
	divB.className = 'navbar-nav';
	divB.id = 'target';
	// contDiv
	contDiv.className = 'text-center container-fluid pt-5';
	contDiv.id = 'cont';

	// appending
	nav.appendChild(logoA);
	nav.appendChild(butt);
	butt.appendChild(span);
	divA.appendChild(divB);
	nav.appendChild(divA);
	document.body.appendChild(nav);
	document.body.appendChild(contDiv);
}

// declare function
function navBar(colorCode, array, isLight) {

	populateHTML()
	document.getElementById('id').style.backgroundColor = colorCode;
	
	for(var i = 0; i < array.length; i++) {
		// declare
		var a = document.createElement('a');
		var dispDiv = document.createElement('div');
		var img = document.createElement('img');
		var p = document.createElement('p');
		// attributes
		a.className = ' nav-item nav-link'
		a.href = array[i].link;
		a.textContent = array[i].text;
		a.target = '_blank';
		img.src = array[i].img;
		img.className = 'w-50';
		p.textContent = array[i].about;
		p.className = 'p-5'
		dispDiv.className = 'mt-3 border border-secondary'
		// a.style.color = 'white';
		// appending
		dispDiv.appendChild(img);
		dispDiv.appendChild(p);
		document.getElementById('cont').appendChild(dispDiv);
		document.getElementById('target').appendChild(a);
	}

	if(isLight == true) {
		document.getElementById('id').className += ' navbar-dark';
	}else {
		document.getElementById('id').className += ' navbar-light';
	}

}

navBar('#cd0e0e', links, true)