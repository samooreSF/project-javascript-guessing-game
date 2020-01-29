let newGuessingGame = require('./lib/newGuessingGame');
let guessingGameMakeGuess = require('./lib/guessingGameMakeGuess');
let guessingGameIsDone = require('./lib/guessingGameIsDone');

let process = require('process');

let readlineSync;
try {
  readlineSync = require('readline-sync');
} catch (err) {
  console.log('You must install the readline-sync module. Run the following');
  console.log('command to install it:');
  console.log();
  console.log('  npm install');
  console.log();

  process.exit();
}
let secretInput = readlineSync.question('Enter a secret word: ', { hideEchoBack: true });

//console.log(`You entered: ${secretInput}`);

//let wordToGuess = readlineSync.question('What word do you want them to guess? ');


let game = newGuessingGame(secretInput);

console.log(`"Guessing" 'secret word', one letter at a time.`);
console.log();

// for (let letter of wordToGuess) {
//   console.log(`Guessing letter: ${letter}`);

//   guessingGameMakeGuess(game, letter);

//   console.log(`Current word is: ${game.currentWord}`);
//   console.log();
// }

// let isGameDone = guessingGameIsDone(game);

// console.log(`We have guessed every letter in ${wordToGuess}.`);
// console.log(`The game is done? ${isGameDone}`);
// console.log(`How many turns did we take? ${game.numGuesses}`);

// The code below is commented out because it will run
// forever until you correctly imlpement the guessingGameMakeGuess
// and guessingGameIsDone functions.
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// while (!guessingGameIsDone(game)) {
//   for (let letter in alphabet) {
//     guessingGameMakeGuess(game, letter);
//   }
// }
while (!guessingGameIsDone(game)){
  let letterGuess = readlineSync.question('What letter do you want to guess? ');
  console.log(`Guessing letter: ${letterGuess}`);

  guessingGameMakeGuess(game, letterGuess);

  console.log(`Current word is: ${game.currentWord}`);
  console.log();
  


}

console.log(`Congratulations! You won in ${game.numGuesses} moves`);
console.log(`You guessed ${secretInput}`);
