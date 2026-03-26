
// 3. Matriz de números

const ordenar = (lista, direccion) => {
  const arr = [...lista];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const intercambiar =
        direccion === "Asc"
          ? arr[j] > arr[j + 1]
          : arr[j] < arr[j + 1];

      if (intercambiar) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

console.log(ordenar([2, 4, 6, 8, 9], "Asc"));
console.log(ordenar([2, 4, 6, 8, 9], "Desc"));
console.log(ordenar([5, 1, 3, 9, 2], "Asc"));
console.log(ordenar([5, 1, 3, 9, 2], "Desc"));
