/**
 * Returns true if the given guessing game has its target word guessed
 * and false otherwise.
 *
 * @param {object} game - A guessing game object
 * @returns {boolean} Whether the given game has its target word guessed
 */
function guessingGameIsDone(game) {
  if(game.currentWord === game.targetWord){
    console.log("Game is done");
    return true;
    
  }
  
    return false;
  
}

module.exports = guessingGameIsDone;
