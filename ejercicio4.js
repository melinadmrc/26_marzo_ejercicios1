
// 4. marco de asteriscos
const marcoTexto = (texto) => {
  const palabras = texto.split(" ");
  const maxLen = palabras.reduce((max, palabra) => Math.max(max, palabra.length), 0);
  const ancho = maxLen + 4; // 2 asteriscos + 2 espacios
  const borde = "*".repeat(ancho);

  let resultado = borde + "\n";
  palabras.forEach((palabra) => {
    const espacios = " ".repeat(maxLen - palabra.length);
    resultado += `* ${palabra}${espacios} *\n`;
  });
  resultado += borde;

  document.getElementById("resultado4").innerText = resultado;
};

marcoTexto("¿Qué te parece el reto?");
