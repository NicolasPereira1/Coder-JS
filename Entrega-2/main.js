// Array donde se guarda cada inversión que se realiza
const historial = [];

// Función para calcular interés compuesto básico
function calcular(monto, interes, meses) {
  const r = interes / 100;
  const t = meses / 12;
  const total = monto * Math.pow(1 + r, t);
  return total;   // Retorna el monto total aplicado el interes compuesto
}

// funcion para mostrar el historial en pantalla
function mostrar() {
  const lista = document.getElementById("historial");  
  lista.innerHTML = ""; 

  for (let i = 0; i < historial.length; i++) {  
    const item = historial[i];  
    const li = document.createElement("li");  
    li.textContent = `Monto: $${item.monto}, Interés: ${item.interes}%, Meses: ${item.meses} → Total: $${item.total.toFixed(2)}`; 
    lista.appendChild(li); //añade nuevo elemento a la lista
  }
}

// Cuando hago click en calcular ejecuto la funcion "calcular"
document.getElementById("calcularBtn").addEventListener("click", function () { 

  //tomo valores de los inputs y los convierto a numeros
  const monto = parseFloat(document.getElementById("monto").value);
  const interes = parseFloat(document.getElementById("interes").value);
  const meses = parseInt(document.getElementById("meses").value);

  //aseguro que los valores sean validos o me retorna un alert de error
  if (isNaN(monto) || isNaN(interes) || isNaN(meses) || monto <= 0 || interes < 0 || meses <= 0) {
    alert("Ingresa valores válidos.");
    return;
  }

  //calculo y lo guardo en la variable "total"
  const total = calcular(monto, interes, meses);

  // creo objeto con los datos
  const inversion = {
    monto: monto,
    interes: interes,
    meses: meses,
    total: total
  };

  // lo guardo en el historial 
  historial.push(inversion);

  // muestro resultado
  document.getElementById("resultado").innerText = "Monto final: $" + total.toFixed(2); //toFixed(2) para mostrar dos decimales porque algunas cuentas eran muy largas

  // ejecuto funcion "mostrar" -muestro historial
  mostrar();
});
