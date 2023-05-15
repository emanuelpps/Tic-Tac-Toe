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
let buttonsList = 0; //acumulador, una vez que llega a nueve el juego esta empatado

for (const button of buttons) {
  button.addEventListener("click", function onClick() {
    console.log("click");
    circulo == false && cruz === false
      ? getCruz(button)
      : circulo == true && cruz == false
      ? getCruz(button)
      : circulo == false && cruz == true
      ? getCirculo(button)
      : null;
  });
}

const getCruz = (button) => {
  button.innerHTML != ""
    ? button.innerHTML
    : ((circulo = false),
      (cruz = true),
      (button.innerHTML = "X"),
      (button.value = "X"),
      buttonsList < 9 ? buttonsList++ : buttonsList,
      console.log(buttonsList),
      victoryRulesX());
};

const getCirculo = (button) => {
  button.innerHTML != ""
    ? button.innerHTML
    : ((cruz = false),
      (circulo = true),
      (button.innerHTML = "O"),
      (button.value = "O"),
      buttonsList < 9 ? buttonsList++ : buttonsList,
      console.log(buttonsList),
      victoryRulesO());
};

const victoryRulesX = () => {
  if (buttons1.value == "X" && buttons2.value == "X" && buttons3.value == "X") {
    buttons1.style.background = "#007005";
    buttons2.style.background = "#007005";
    buttons3.style.background = "#007005";
    VictoryX();
  } else if (
    buttons4.value == "X" &&
    buttons5.value == "X" &&
    buttons6.value == "X"
  ) {
    buttons4.style.background = "#007005";
    buttons5.style.background = "#007005";
    buttons6.style.background = "#007005";
    VictoryX();
  } else if (
    buttons7.value == "X" &&
    buttons8.value == "X" &&
    buttons9.value == "X"
  ) {
    buttons7.style.background = "#007005";
    buttons8.style.background = "#007005";
    buttons9.style.background = "#007005";
    VictoryX();
  } else if (
    buttons1.value == "X" &&
    buttons4.value == "X" &&
    buttons7.value == "X"
  ) {
    buttons1.style.background = "#007005";
    buttons4.style.background = "#007005";
    buttons7.style.background = "#007005";
    VictoryX();
  } else if (
    buttons2.value == "X" &&
    buttons5.value == "X" &&
    buttons8.value == "X"
  ) {
    buttons2.style.background = "#007005";
    buttons5.style.background = "#007005";
    buttons8.style.background = "#007005";
    VictoryX();
  } else if (
    buttons3.value == "X" &&
    buttons6.value == "X" &&
    buttons9.value == "X"
  ) {
    buttons3.style.background = "#007005";
    buttons6.style.background = "#007005";
    buttons9.style.background = "#007005";
    VictoryX();
  } else if (
    buttons1.value == "X" &&
    buttons5.value == "X" &&
    buttons9.value == "X"
  ) {
    buttons1.style.background = "#007005";
    buttons5.style.background = "#007005";
    buttons9.style.background = "#007005";
    VictoryX();
  } else if (
    buttons3.value == "X" &&
    buttons5.value == "X" &&
    buttons7.value == "X"
  ) {
    buttons3.style.background = "#007005";
    buttons5.style.background = "#007005";
    buttons7.style.background = "#007005";
    VictoryX();
  } else {
    Tie();
  }
};

const victoryRulesO = () => {
  if (buttons1.value == "O" && buttons2.value == "O" && buttons3.value == "O") {
    buttons1.style.background = "#007005";
    buttons2.style.background = "#007005";
    buttons3.style.background = "#007005";
    VictoryO();
  } else if (
    buttons4.value == "O" &&
    buttons5.value == "O" &&
    buttons6.value == "O"
  ) {
    buttons4.style.background = "#007005";
    buttons5.style.background = "#007005";
    buttons6.style.background = "#007005";
    VictoryO();
  } else if (
    buttons7.value == "O" &&
    buttons8.value == "O" &&
    buttons9.value == "O"
  ) {
    buttons7.style.background = "#007005";
    buttons8.style.background = "#007005";
    buttons9.style.background = "#007005";
    VictoryO();
  } else if (
    buttons1.value == "O" &&
    buttons4.value == "O" &&
    buttons7.value == "O"
  ) {
    buttons1.style.background = "#007005";
    buttons4.style.background = "#007005";
    buttons7.style.background = "#007005";
    VictoryO();
  } else if (
    buttons2.value == "O" &&
    buttons5.value == "O" &&
    buttons8.value == "O"
  ) {
    buttons2.style.background = "#007005";
    buttons5.style.background = "#007005";
    buttons8.style.background = "#007005";
    VictoryO();
  } else if (
    buttons3.value == "O" &&
    buttons6.value == "O" &&
    buttons9.value == "O"
  ) {
    buttons3.style.background = "#007005";
    buttons6.style.background = "#007005";
    buttons9.style.background = "#007005";
    VictoryO();
  } else if (
    buttons1.value == "O" &&
    buttons5.value == "O" &&
    buttons9.value == "O"
  ) {
    buttons1.style.background = "#007005";
    buttons5.style.background = "#007005";
    buttons9.style.background = "#007005";
    VictoryO();
  } else if (
    buttons3.value == "O" &&
    buttons5.value == "O" &&
    buttons7.value == "O"
  ) {
    buttons3.style.background = "#007005";
    buttons5.style.background = "#007005";
    buttons7.style.background = "#007005";
    VictoryO();
  } else {
    Tie();
  }
};

const VictoryX = () => {
  title.innerHTML = "GANASTE!";
  jugadorCruz++;
  for (const button of buttons) {
    button.disabled = true;
  }
  
};

const VictoryO = () => {
  title.innerHTML = "GANASTE!";
  jugadorCirculo++;
  for (const button of buttons) {
    button.disabled = true;
  }
};

const Tie = (buttons) => {
  if (buttonsList === 9) {
    console.log('Empate');
    title.innerHTML = "EMPATE!"
    // mostrar mensaje de empate o hacer otra acción aquí
  }
  }



const reset = () => {
    console.log('reset');
      for (const button of buttons) {
        button.innerHTML= '';
  }
}
