const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

console.log("1 ESERCIZIO");
const reversedTeachers = [];

for (let i = teachers.length - 1 ; i >= 0; i--) { 
  reversedTeachers.push(teachers[i])
  // console.log("Valore di i: ", i);
  // console.log("Array: ", reversedTeachers);
}
console.log("Array: ", reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
console.log("2 ESERCIZIO");
const longNames = [];

for (let i=0 ; i < teachers.length - 1 ; i++) {

  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

console.log("Array: ", longNames);


// 3. Rimuovi 'Ed' dall'array teachers
console.log("3 ESERCIZIO");
const indiceElementoRimuovere = teachers.indexOf("Ed");

if (indiceElementoRimuovere != -1)  {
  teachers.splice(indiceElementoRimuovere, 1)  // posizione + 1 elemento da rimuovere
}

console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;