//constantes de numeros maximos y mínimos entre 1-100
const MIN = 1;
const MAX = 100;

//funcion numero aleatorio
function numeroGenerado() {
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

//funcion solicito numero del jugador
function pedirNumero() {
  return parseInt(prompt("Adivina el número del 1-100: "));
}

//funcion si quiere jugar otra vez una vez terminado el juego
  function jugarOtraVez() {
  const respuesta = prompt("¿Quieres jugar otra vez? (si/no)").toLowerCase();

  if (respuesta === "si" || respuesta === "sí") {
    juego();
  } 
  else if (respuesta === "no") {
    alert("Juego terminado. ¡Gracias por jugar!");
  } 
  else {
    alert("Respuesta inválida. Responde 'si' o 'no'.");
    return jugarOtraVez(); // <--- importante el return aquí
  }
}

// defino funcion del juego
function juego() {
  const numeroCorrecto = numeroGenerado();
  let intentos = 1;
  let numeroElegido = pedirNumero();

  while (numeroElegido !== numeroCorrecto) {
    if (numeroElegido > numeroCorrecto && numeroElegido <= 100) {
      alert("Muy alto. Intenta de nuevo. Intentos: " + intentos++);
    } 
    else if (numeroElegido < numeroCorrecto && numeroElegido >= 1) {
      alert("Muy bajo. Intenta de nuevo. Intentos: " + intentos++);
    } 
    else if (numeroElegido > 100 || numeroElegido < 1 || isNaN(numeroElegido)) {
      alert("Introduce un número válido entre 1 y 100. Intentos: " + intentos++);
    } 
    else {
      alert("Número incorrecto. Intenta de nuevo. Intentos: " + intentos++);
    }

    numeroElegido = pedirNumero();
  }

  alert("¡Correcto! El número era " + numeroCorrecto + ". Lo lograste en " + intentos + " intentos.");
  jugarOtraVez();
}
//inicio juego por fuera de la funcion para que se ejecute al cargar la pagina
juego();

