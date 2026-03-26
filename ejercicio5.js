
// ejercicio 5
const numeros = [3, 7, 1, 15, 9, 15, 4];

const segundoMasGrande = (lista) => {
  const unicos = [...new Set(lista)].sort((a, b) => b - a);
  return unicos[1];
};

document.getElementById("resultado5").innerText =
  `Lista: [${numeros}]\nSegundo más grande: ${segundoMasGrande(numeros)}`;
