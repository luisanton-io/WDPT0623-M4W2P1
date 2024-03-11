const numeri = [10, 5, 8, 13, 1, 2, 3, 21, 34, 55]

// Desideriamo un array con soltanto i numeri pari
// Utilizziamo un classico for-loop

// let numeriPari = [];

// for (
//   // Inizializzazione variable indice
//   let i = 0;
//   // Condizione per l'ingresso nel ciclo
//   i < numeri.length;
//   // Passo (step), che avviene alla fine delle istruzioni nel ciclo // i = i + 1
//   i++
// ) {
//   console.log(i);

//   const numero = numeri[i];

//   if (numero % 2 === 0) {
//     // il nostro numero è pari, quindi possiamo aggiungerlo alla nostra lista
//     numeriPari.push(numero);
//   }
//   // .......
// }

// console.log(numeriPari);

// Con l'introduzione di ES6 abbiamo dei metodi che ci
// aiutano a snellire il nostro codice

// In questo caso, per filtrare i numeri che, ad esempio, sono pari, possiamo scrivere

// const numeriPari = numeri.filter(function (numero) {
//   return numero % 2 === 0;
// });

// const numeriDispariMaggioriDi10 = numeri.filter(
//   (numero) => numero % 2 === 1 && numero > 10
// );

// console.log(numeriPari);
// console.log(numeriDispariMaggioriDi10);

// .forEach

// const risultato = numeri.forEach((numero, indice) => {
//   console.table({
//     numero,
//     indice,
//   });
// });

// console.log(risultato); // non ha senso. Il metodo .forEach non restituisce un risultato!

// for-of
// Un altro modo di fare un for-loop

// for (const numero of numeri) {
//   console.log(numero);
// }

// .map

// In the good ol' way
// const numeriDoppi = []

// console.log(numeriDoppi)

// for (let i = 0; i < numeri.length; i++) {
//     const numeroDoppio = numeri[i] * 2
//     numeriDoppi.push(numeroDoppio)
// }

// console.log(numeriDoppi)



// Trasforma i nostri elementi tramite la funzione di callback
const numeriDoppi = numeri.map(function (numero) {
    return numero * 2 // la callback di .map restituisce gli elementi trasformati
})

// console.log(numeriDoppi)

// const fruits = ["apple", "orange", "pear", "peach", "banana", "pineapple"]

// const fruitList = document.querySelector("#fruit-list")
// const fruitListHTML = fruits.map((fruit) => /*html*/ `
//     <li>${fruit}</li>
// `)
// .join("")

// fruitList.innerHTML = fruitListHTML

// console.log(fruitListHTML)

// .join
// const numeriUnitiDaTilde = numeri.join("~")

// console.log(numeriUnitiDaTilde)

// .reduce

const somma = numeri.reduce((valorePrecedente, numero, index) => {
    return valorePrecedente + numero
}, 0)

// In the good ol' way
// let minValue = numeri[0]

// for (let i = 0; i< numeri.length; i++) {
//     if (numeri[i]< minValue) {
//         minValue = numeri[i]
//     }
// }
// console.log(minValue)

const minValue = numeri.reduce((valorePrecedente, numero) =>
    // if (numero < valorePrecedente) {
    //     return numero
    // } else {
    //     return valorePrecedente
    // }

    numero < valorePrecedente ? numero : valorePrecedente
)

const maxValue = numeri.reduce((valorePrecedente, numero) =>
    numero > valorePrecedente ? numero : valorePrecedente
)

const avgValue = numeri.reduce((valorePrecedente, numero, index) => {
    return valorePrecedente + numero
}, 0) / numeri.length


console.table({
    somma, minValue, maxValue, avgValue
})

console.log(somma)
