/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']


function elencoStampato(){
 return pets
}
 console.log(`${elencoStampato()}`)


 
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/


function ordineAlfabetico(){
  return [...pets].sort()
  }
console.log(`${ordineAlfabetico()}`)


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

function ordineInvertito() {
  const invertito = [...pets].reverse()
  return invertito 
}
console.log(`${ordineInvertito()}`)


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/



function nuovoElenco(animali){
  elementoZero = animali.shift()
  return animali.push(elementoZero)
}

elencoDefinitivo = nuovoElenco(pets)
console.log(`${pets}`)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black', 
    trims: ['life', 'style', 'r-line'],
  },
]

let licensePlates = ['IT104CTT', 'FR661RE', 'JA000RL'] 

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlates[i]; 
}

console.log(cars); 

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = [
  {
    brand: 'Tesla',
    model: 'S',
    color: 'white',
    trims: ['titanium', 'st', 'automatic'],
  }
]

cars.push(newCar)

for (let i = 0; i < cars.length ; i++) {
  let car = cars[i] ;
  if (car.trims && car.trims.length > 0) {
    car.trims.pop();
  }
}


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (i = 0; i < cars.length; i++) {
  let car = cars[i]
  if (car.trims && car.trims.length >= 0) {
    justTrims.push(car.trims[0])
  }
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


for (let i = 0; i < cars.length; i++) {
  const macchina = cars[i];
  
  if (macchina && macchina.color) {
    const primaLettera = macchina.color[0].toLowerCase(); 

    if (primaLettera === 'b') {
      console.log('Fizz');
    } else {
      console.log('Buzz');
    }
  } 
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


function elencoNumeri(i) {
i = 0
do {
  console.log(`${numericArray[i] }`)
  i++
} while(i <= numericArray.length && numericArray[i] !== 66)
}
elencoNumeri()


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
    g7 - n14 - u21 - z26 - d4
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let newCharactersArray = []

for (i = 0; i < charactersArray.length; i++) {

  switch (charactersArray[i]) {
    
    case 'd':
      newCharactersArray.push(4)
      break
    case 'g':
      newCharactersArray.push(7)
      break
    case 'n':
      newCharactersArray.push(14)
    case 'u':
      newCharactersArray.push(21)
      break
    case 'z':
      newCharactersArray.push(26)
      break
  }
}

console.log(`${newCharactersArray}`)
