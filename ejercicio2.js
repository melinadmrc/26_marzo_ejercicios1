
// 2. Dibujar figuras con asteriscos
//   \n - salto de línea

const lado = 4; 
const contenedor = document.getElementById("figuras");

// CUADRADO
let cuadrado = "CUADRADO\n";
for (let fila = 1; fila <= lado; fila++) {
  let linea = "";
  for (let col = 1; col <= lado; col++) {
    linea += "*";
  }
  cuadrado += linea + "\n";
}
contenedor.innerHTML += "<pre>" + cuadrado + "</pre>";

// TRIÁNGULO
let triangulo = "TRIÁNGULO\n";
for (let fila = 1; fila <= lado; fila++) {
  let linea = "";
  for (let col = 1; col <= fila; col++) {
    linea += "*";
  }
  triangulo += linea + "\n";
}
contenedor.innerHTML += "<pre>" + triangulo + "</pre>";

