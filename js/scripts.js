//PUNTOS
const userPointsElement = document.getElementById('user-points');
const pcPointsElement = document.getElementById('pc-points');

//OPCIONES
const optionsContainerElement = document.getElementById('options-container');

//RESULTADO
const userSelectionElement = document.getElementById('user-selection');
const pcSelectionElement = document.getElementById('pc-selection');
const gameResultElement = document.getElementById('game-result');

const pcOptions = ['rock', 'paper', 'scissors']; //Opciones del PC > simple

const gameOptions = {
	//Reglas del juego
	rock: {
		paper: false,
		scissors: true
		// lizard,
		// spoke
	},
	paper: {
		rock: true,
		scissors: false
		// lizard,
		// spoke
	},
	scissors: {
		rock: false,
		paper: true
		// lizard,
		// spoke
	},
	lizard: {
		rock: false,
		paper: true
		// spoke
	},
	spoke: {
		rock: false,
		paper: true
		// lizard
	}
};

const gameImages = {
	//Imágenes del juego
	rock: './assests/images/icon-rock.svg',
	paper: './assests/images/icon-paper.svg',
	scissors: './assests/images/icon-scissors.svg'
};

let userOption;
let pcOption;
let userPoints = 0;
let pcPoints = 0;

//LÓGICA

//Asignación de puntos
const assignPoints = () => {
	userPointsElement.textContent = userPoints;
	pcPointsElement.textContent = pcPoints;
	userSelectionElement.src = gameImages[userOption]; //Asigación de imagen de la selección del user.
};

//Comparación de jugadas
const compareSelectedOptions = () => {
	if (userOption === pcOption) {
		gameResultElement.textContent = 'TIE';
	} else if (gameOptions[userOption][pcOption]) {
		//Me meto en el objeto dentro del objeto.
		gameResultElement.textContent = 'YOU WIN';
		userPoints++;
	} else {
		gameResultElement.textContent = 'YOU LOOSE';
		pcPoints++;
	}
	assignPoints();
};

//Jugada PC
const getPcOption = () => {
	const randomPosition = Math.floor(Math.random() * pcOptions.length);
	pcOption = pcOptions[randomPosition];
	compareSelectedOptions();
	pcSelectionElement.src = gameImages[pcOption]; //Asigación de imagen de la selección del PC.
};

//Jugada User
const saveUserOption = event => {
	userOption = event.target.dataset.item;
	getPcOption();
};

optionsContainerElement.addEventListener('click', saveUserOption);
