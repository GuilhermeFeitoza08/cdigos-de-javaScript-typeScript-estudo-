let numeros = [0,1,2];

let novoArrayNumeros = [numeros,4,5];
console.log("Novo array com spread:", novoArrayNumeros);

let novoArrayNumeros2 = [...numeros,4,5];
console.log("Novo array com spread:", novoArrayNumeros2);

let[primeiro, segundo, ...resto] = numeros;
console.log("Primeiro:", primeiro);
console.log("Segundo:", segundo);
console.log("Resto:", resto);