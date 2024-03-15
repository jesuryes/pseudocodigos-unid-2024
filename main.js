function leerNumeros() {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  console.log(numeroUno);
  console.log(numeroDos);
}

function sumar() {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  const Resultado = parseInt(numeroUno) + parseInt(numeroDos);
  console.log(typeof Resultado);
  console.log(Resultado);
  document.getElementById("Resultado").innerHTML = Resultado;
}

function restar() {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  const Resultado = parseInt(numeroUno) - parseInt(numeroDos);
  console.log(typeof Resultado);
  console.log(Resultado);
  document.getElementById("Resultado").innerHTML = Resultado;
}

function dividir() {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  const Resultado = parseInt(numeroUno) / parseInt(numeroDos);
  console.log(typeof Resultado);
  console.log(Resultado);
  document.getElementById("Resultado").innerHTML = Resultado;
}

function multiplicar() {
  const numeroUno = document.getElementById("numeroUno").value;
  const numeroDos = document.getElementById("numeroDos").value;
  const Resultado = parseInt(numeroUno) * parseInt(numeroDos);
  console.log(typeof Resultado);
  console.log(Resultado);
  document.getElementById("Resultado").innerHTML = Resultado;
}
