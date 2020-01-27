/**
 * Given a game and guess,
 */
function guessingGameMakeGuess(game, guess) {
game.numGuesses ++;
    for(let i =0; i <= game.targetWord; i++){
        
        if(targetWord[i] === guess){
            let correctGuess = targetWord[i];
            let array = game.currentWord.split('');
            array[i]=guess;
            game.currentWord.join('');
        
        }
        
    }
    

}

module.exports = guessingGameMakeGuess;
