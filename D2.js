/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num1 = 40;
const num2 = 30;

console.log("Il primo numero è più grand: ", num1 > num2);
console.log("Il secondo numero è più grande: ", num1 < num2);

if (num1 > num2) {
  console.log("Il primo numero è più grande");
} else {
  console.log("Il secondo numero è più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const num3 = 7;
if (num3 !== 5) {
  console.log("Not equal");
} else {
  console.log("qual");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
const num4 = 25;
if (num4 % 5 === 0) console.log("Divisibile per 5");
else if (num4 % 5 === 0) console.log("Non divisibile per 5");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const num1Ex4 = 10;
const num2Ex4 = 2;

if (num1Ex4 === 8) {
  console.log("num1Ex4 uguale a 8");
} else if (num2Ex4 === 8) {
  console.log("num2Ex4 uguale a 8");
} else if (num1Ex4 + num2Ex4 === 8 || num1Ex4 - num2Ex4 === 8) {
  console.log("la loro addizione o sottrazione è =8");
} else {
  console.log("num1Ex4 ed num2Ex4 diversi da 8");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
  let totalShoppingCart = 60;
  if (totalShoppingCart > 50) {
    console.log("tot>50=Spedizione gratuita:");
  } else {
    console.log("tot>50= + 10 di spedizione:", totalShoppingCart + 10);
  }
}
/* ESERCIZIO 6
Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart = 60;
let discoutValue = ("Sconto carrello:", totalShoppingCart * 20) / 100;
let totalShop = totalShoppingCart - discoutValue;

if (totalShoppingCart > 50) {
  console.log("Tot con spedizione gratuita con 20% B.F.:", totalShop);
} else {
  console.log("tot + 10 di spedizione con 20% B.F.:", totalShop + 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const numEx8 = 10;
const strEx8 = "string";

console.log(typeof numEx8);
console.log(typeof strEx8);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let val = 7;
  if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
  */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
console.log("me", me);

const me2 = structuredClone(me);
me2.city = "Toronto";

console.log("me2", me2);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
// const me4 = {
//   name: "John",
//   lastName: "Doe",
//   skills: ["javascript", "html", "css"],
// };
// console.log("me4", me4);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
