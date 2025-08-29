const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
  console.log("1 ESERCIZIO");
  const fourthTeacher = teachers[3];
  console.log("Il quarto insegnante nell'array è:", fourthTeacher);  

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
  console.log("2 ESERCIZIO");
  console.log("Prima della sostituizione: ", teachers)
  teachers.splice(4, 1, "Patrick") //posizione4 - rimuovo 1 - aggiungo 'Patrick'
  console.log("Dopo la sostituizione: ", teachers)

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
  console.log("3 ESERCIZIO");
  const lastTeacher = teachers.pop();
  console.log("Ultimo insegnante rimosso: ", lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
console.log("4 ESERCIZIO");  
const firstTeacher = teachers.shift();
console.log("Primo insegnante rimosso: ", firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
console.log("5 ESERCIZIO");
teachers.push("Vanessa")
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
console.log("6 ESERCIZIO");
teachers.unshift("Sarah")
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
console.log("7 ESERCIZIO");
const lewisIndex = teachers.indexOf("Lewis");
if (lewisIndex !== -1) {
  console.log("Indice di Lewis nell'array:", lewisIndex);
}
else
{
  console.log("Insegnante non trovato!");
}

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

console.log("8 ESERCIZIO");
const isTeachersEmpty = teachers.length == 0;  // L'array ha 7 elementi quindi confronterà se 7 == 0 e ritornerà false

if (isTeachersEmpty) {
  console.log("Valore di isTeachersEmpty: " + isTeachersEmpty + " -> Array vuoto");
}
else {
  console.log("Valore di isTeachersEmpty: " + isTeachersEmpty + " -> Array non vuoto");
}