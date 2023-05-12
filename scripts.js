const buttons = document.querySelectorAll(".button");
const title = document.getElementsByTagName("h1")[0];
const buttonReset = document.createElement("button");
const buttons1 = document.getElementById("button1");
const buttons2 = document.getElementById("button2");
const buttons3 = document.getElementById("button3");
const buttons4 = document.getElementById("button4");
const buttons5 = document.getElementById("button5");
const buttons6 = document.getElementById("button6");
const buttons7 = document.getElementById("button7");
const buttons8 = document.getElementById("button8");
const buttons9 = document.getElementById("button9");

//jugadores
let jugadorCirculo = 0;
let jugadorCruz = 0;

const playerCirculo = document.createElement("p");
const playerCruz = document.createElement("p");

//ciculo o cruz booleano true o false
let circulo = false;
let cruz = false;
let buttonsList = 0; //acumulador, una vez que llega a nueve el juego esta empatad0

for (const button of buttons) {
  button.addEventListener("click", function onClick() {
    console.log("click");
    if (circulo == false && cruz === false) {
      getCruz(button);
    } else if (circulo == true && cruz == false) {
      getCruz(button);
    } else if (circulo == false && cruz == true) {
      getCirculo(button);
    }
  });
}

const getCruz = (button) => {
  if (button.innerHTML != "") {
    return button.innerHTML;
  } else if (button.innerHTML == "") {
    circulo = false;
    cruz = true;
    button.innerHTML = "X";
    button.value = "X";
    buttonsList < 9 ? buttonsList++ : finishMessage();
    console.log(buttonsList);
    victoryRulesX();
  }
};

const getCirculo = (button) => {
  if (button.innerHTML != "") {
    return button.innerHTML;
  } else if (button.innerHTML == "") {
    cruz = false;
    circulo = true;
    button.innerHTML = "O";
    button.value = "O";
    buttonsList < 9 ? buttonsList++ : finishMessage();
    console.log(buttonsList);
    victoryRulesO();
  }
};

const victoryRulesX = () => {
  if (buttons1.value == "X" && buttons2 == "X" && buttons3 == "X") {
    buttons1.style.background='#007005';
    buttons2.style.background='#007005';
    buttons3.style.background='#007005';
    VictoryX();
  } else if (
    buttons4.value == "X" &&
    buttons5.value == "X" &&
    buttons6.value == "X"
  ) {
    buttons4.style.background='#007005';
    buttons5.style.background='#007005';
    buttons6.style.background='#007005';
    VictoryX();
    
  } else if (
    buttons7.value == "X" &&
    buttons8.value == "X" &&
    buttons9.value == "X"
  ) {
    buttons7.style.background='#007005';
    buttons8.style.background='#007005';
    buttons9.style.background='#007005';
    VictoryX();
  } else if (
    buttons1.value == "X" &&
    buttons4.value == "X" &&
    buttons7.value == "X"
  ) {
    buttons1.style.background='#007005';
    buttons4.style.background='#007005';
    buttons7.style.background='#007005';
    VictoryX();
  } else if (
    buttons2.value == "X" &&
    buttons5.value == "X" &&
    buttons8.value == "X"
  ) {
    buttons2.style.background='#007005';
    buttons5.style.background='#007005';
    buttons8.style.background='#007005';
    VictoryX();
  } else if (
    buttons3.value == "X" &&
    buttons6.value == "X" &&
    buttons9.value == "X"
  ) {
    buttons3.style.background='#007005';
    buttons6.style.background='#007005';
    buttons9.style.background='#007005';
    VictoryX();
  } else if (
    buttons1.value == "X" &&
    buttons5.value == "X" &&
    buttons9.value == "X"
  ) {
    buttons1.style.background='#007005';
    buttons5.style.background='#007005';
    buttons9.style.background='#007005';
    VictoryX();
  } else if (
    buttons3.value == "X" &&
    buttons5.value == "X" &&
    buttons7.value == "X"
  ) {
    buttons3.style.background='#007005';
    buttons5.style.background='#007005';
    buttons7.style.background='#007005';
    VictoryX();
  }
};

const victoryRulesO = () => {
  if (buttons1.value == "O" && buttons2 == "O" && buttons3 == "O") {
    buttons1.style.background='#007005';
    buttons2.style.background='#007005';
    buttons3.style.background='#007005';
    VictoryO();
  } else if (
    buttons4.value == "O" &&
    buttons5.value == "O" &&
    buttons6.value == "O"
  ) {
    buttons4.style.background='#007005';
    buttons5.style.background='#007005';
    buttons6.style.background='#007005';
    VictoryO();
    
  } else if (
    buttons7.value == "O" &&
    buttons8.value == "O" &&
    buttons9.value == "O"
  ) {
    buttons7.style.background='#007005';
    buttons8.style.background='#007005';
    buttons9.style.background='#007005';
    VictoryO();
  } else if (
    buttons1.value == "O" &&
    buttons4.value == "O" &&
    buttons7.value == "O"
  ) {
    buttons1.style.background='#007005';
    buttons4.style.background='#007005';
    buttons7.style.background='#007005';
    VictoryO();
  } else if (
    buttons2.value == "O" &&
    buttons5.value == "O" &&
    buttons8.value == "O"
  ) {
    buttons2.style.background='#007005';
    buttons5.style.background='#007005';
    buttons8.style.background='#007005';
    VictoryO();
  } else if (
    buttons3.value == "O" &&
    buttons6.value == "O" &&
    buttons9.value == "O"
  ) {
    buttons3.style.background='#007005';
    buttons6.style.background='#007005';
    buttons9.style.background='#007005';
    VictoryO();
  } else if (
    buttons1.value == "O" &&
    buttons5.value == "O" &&
    buttons9.value == "O"
  ) {
    buttons1.style.background='#007005';
    buttons5.style.background='#007005';
    buttons9.style.background='#007005';
    VictoryO();
  } else if (
    buttons3.value == "O" &&
    buttons5.value == "O" &&
    buttons7.value == "O"
  ) {
    buttons3.style.background='#007005';
    buttons5.style.background='#007005';
    buttons7.style.background='#007005';
    VictoryO();
  }
};

const VictoryX = () => {
  title.innerHTML = "GANASTE!";
  jugadorCruz++;
  console.log(jugadorCruz);
};

const VictoryO = () => {
  title.innerHTML = "GANASTE!";
  jugadorCirculo++;
  buttonReset.onclick = function (){
    resetValues();
  }
};

function finishMessage() {
  console.log("aca");
  buttonsList > 9 ? alert("Empate!") : (buttonsList = 0);
}


const reset = (buttons) => {
  for (const button of buttons) {
  buttonReset.addEventListener("click", function onClick() {
    
      button.innerHTML = ''});
    }
    
}

//buttons es un array deberia recorrer todo el array y chequear primero si ya hay values asignados

/* function cruzCirculoDecider() {
  for (let i = 0; i < buttons.length; i++) {
    console.log("llegsste");
    if (buttons.innerHTML == "O") {
      circulo = false;
      cruz = true;
      console.log("cruz");
    } else if (buttons.innerHTML == "X") {
      circulo = true;
      cruz = false;
      getCirculo(button);
    } else {
      getCruz(button);
    }
  }
}

const getCirculo = () => {
  button.innerHTML = "O";
  button.value = "O";
}; */

////
/* function clickHandler(){
    
    console.log('click')
        if((btn.textContent == 'O') || (btn.textContent == 'X')){
            btn.textContent
        } else{
            play()
            btn.textContent('i')
        }
    
} */
