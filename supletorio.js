// Definir una función para generar un número aleatorio entre dos valores
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Definir una función para elegir un animal aleatorio de la lista
function getRandomAnimal() {
    const animals = ['dog', 'cat', 'cocodrile', 'horse'];
    const randomIndex = Math.floor(Math.random() * animals.length);
    
   
return animals[randomIndex];
}

// Definir la clase del Ticket
class Ticket {
    constructor() {
        
       
this.number1 = getRandomNumber(1, 2);
        this.number2 = getRandomNumber(1, 2);
        
       
this.animal = getRandomAnimal();
    }
}

// Simular dos jugadores con sus respectivos tickets
const player1 = new Ticket();
const player2 = new Ticket();

console.log('Player 1:', player1);
console.log('Player 2:', player2);

// Verificar si los jugadores son ganadores, si el animal coincide o si alguno es eliminado
if (player1.number1 === player2.number1 && player1.number2 === player2.number2 && player1.animal === player2.animal) {
    console.log('We have a winner $1.000.000! Both numbers and the animal match.');
} else if (player1.animal === player2.animal) {
    
   
console.log('The animals match.Player1 and Player 2 receive an extra ticket.');

extraTicket = new Ticket();
    player2.extraTicket = new Ticket();
    player1.extraTicket = new Ticket();
    console.log('New ticket for Player 1:', player1.extraTicket);
    console.log('New ticket for Player 2:', player2.extraTicket);
} else {
    console.log('No matches. Both player1 and player2 eliminated.');
}