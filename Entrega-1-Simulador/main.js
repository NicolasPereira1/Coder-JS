  //constantes de numeros máximos y mínimos entre 1-100
  const MIN = 1;
  const MAX = 100;

  //funcion numero aleatorio
  function numeroGenerado() {
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; 
  }

  //funcion solicito numero del jugador
  function pedirNumero() {
    return parseInt(prompt("Adivina el número del 1-100:  "));
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
      return jugarOtraVez();
    }
  }

  // defino funcion del juego
  function juego() {
    const numeroCorrecto = numeroGenerado();
    let intentos = 0;
    let numeroElegido = pedirNumero();
    let intentosMaximos = 7;

    while (numeroElegido !== numeroCorrecto && intentos < intentosMaximos) {
      if (numeroElegido > numeroCorrecto && numeroElegido <= 100) {
        intentos++;
        alert("Muy alto. Intenta de nuevo. Intentos restantes: " + (intentosMaximos - intentos));
        
      } 
      else if (numeroElegido < numeroCorrecto && numeroElegido >= 1) {
         intentos++;
        alert("Muy bajo. Intenta de nuevo. Intentos restantes: " + (intentosMaximos - intentos));
       
      } 
      else if (isNaN(numeroElegido) || numeroElegido > 100 || numeroElegido < 1) {
        alert("Introduce un número válido entre 1 y 100.");
      }
      
      if (intentos < intentosMaximos) {
       numeroElegido = pedirNumero();
      }
                     
      
    }

    if (numeroCorrecto === numeroElegido) {
    alert("Ganaste! El número era " + numeroCorrecto + ". Lo lograste en " + intentos + " intentos.");
    }
    else {
      alert("Perdiste! No te quedan mas intentos.  El número era " + numeroCorrecto + ".");
    }
    jugarOtraVez();
  }
  //inicio juego por fuera de la funcion para que se ejecute al cargar la pagina automaticamente
  juego();

