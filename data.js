const allIconsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
console.log(allIconsList);

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

printSelected (allIconsList);

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// Creo altri array contenenti icone della stessa tipologia
const animalIcons = allIconsList.filter((icon) => {
	if (icon.type == "animal") {
		return true
	}
});
console.log(animalIcons);

const vegetIcons = allIconsList.filter((icon) => {
	if (icon.type == "vegetable") {
		return true
	}
});
console.log(vegetIcons);

const userIcons = allIconsList.filter((icon) => {
	if (icon.type == "user") {
		return true
	}
});
console.log(userIcons);

// seleziono il select da cui voglio estrarre i valori
const selectFilter = document.querySelector('.icons_filter');

// evento che al cambio del valore del select mi ristampa la lista in base al valore che trova
selectFilter.addEventListener('change', (event) => {
	document.querySelector(".icon-container").innerHTML = "";
	if (event.target.value == "animal") {
		printSelected(animalIcons);
	} if (event.target.value == "vegetable") {
		printSelected (vegetIcons);
	} if (event.target.value == "user") {
		printSelected (userIcons);
	} if (event.target.value == "all") {
		printSelected (allIconsList);
	}
}
);

function printSelected (array) {
	array.forEach((icon, index) => {
	// Per ogni elemento dell'array stampo i valori all'interno in un nuovo div dentro il container in html
		document.querySelector(".icon-container").innerHTML +=
		`<div class="icon-js">
			<i class="${icon.family} ${icon.prefix}${icon.name}"></i>
			<div class="icon_name">${icon.name}</div>
		</div>`;
	// Milestone 2
	// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
	// Per ogni elemento dell'array gli inserisco il rispettivo colore in style
	document.querySelectorAll(".icon-js > i")[index].style.color = icon.color;
	});
}