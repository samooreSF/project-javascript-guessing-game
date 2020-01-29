/**
 * Given a game and guess,
 */
function guessingGameMakeGuess(game, guess) {
    let currentLetters = game.currentWord.split('');

    game.numGuesses++;

    for(let i = 0; i < game.targetWord.length; i++){
        if(game.targetWord[i] === guess){
            currentLetters[i] = guess;
        }
    }

    game.currentWord = currentLetters.join('');
}

module.exports = guessingGameMakeGuess;
