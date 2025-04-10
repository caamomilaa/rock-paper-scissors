//se hace  con un objeto
// INSTRUCCIONES

// - Localizar los elementos implicados del DOM
// - Crear los datos del programa necesarios

// FLUJO DEL PROGRAMA

//   - Detectar dónde hacemos click (Si tenéis problemas al hacer click
// porque detectáis cosas que no os interesan, podéis usar la propiedad
// "pointer-events:none" en CSS para facilitaros la vida)
//     - Guardar nuestra jugada
//     - Generar una jugada aleatoria para el ordenador y guardarla
//     - Comparar jugadas
//     - Mostrar resultado
//     - Asignar puntos

//PUNTOS
const userPointsElement = document.getElementById('user-points');
const pcPointsElement = document.getElementById('pc-points');

//OPCIONES
const optionsContainerElement = document.getElementById('options-container');

//RESULTADO
const userSelectionElement = document.getElementById('user-selection');
const pcSelectionElement = document.getElementById('pc-selection');
const gameResultElement = document.getElementById('game-result');

const pcOptions = ['rock', 'paper', 'scisssors'];

const gameOptions = {
  rock: {
    paper: false,
    scissors: true
  },
  paper: {
    rock: true,
    scissors: false
  },
  scissors: {
    rock: false,
    paper: true
  }
};

//LÓGICA

let userOption;
let pcOption;

//     - Comparar jugadas
const compareSelectedOptions = () => {
  if (userOption === pcOption) {
    console.log('tie');
  }
};

//Jugada PC
const getPcOption = () => {
  //se puede sacar una posición random de un objeto?
  const randomPosition = Math.floor(Math.random() * pcOptions.length);
  pcOption = pcOptions[randomPosition];
  compareSelectedOptions();
};

//Jugada User
const saveUserOption = event => {
  userOption = event.target.dataset.item;
  getPcOption();
};

optionsContainerElement.addEventListener('click', saveUserOption);

// const compareSelectedOptions = () => {
//   //objeto[useroption]
//   if (userOption === pcOption) {
//     console.log('tie');
//   }
// };
// compareSelectedOptions();
