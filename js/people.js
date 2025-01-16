// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const getNames = require('./names.js')
const getHobbies = require('./hobbies.js')

function people () {
    const fullName = getNames('Domenico', 'Ortello')
    const hobbies = getHobbies('Calcio', 'Palestra', 'Musica')
    return { 
        fullName: fullName, 
        hobbies: hobbies
    };
}
people()
const peopleElm = people()
console.log(peopleElm)