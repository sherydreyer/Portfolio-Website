var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

var word = pickWord();

var answerArray = setupAnswerArray();


var remainingLetters = word.length;

var noOfGuesses = 5;

while (remainingLetters > 0 && noOfGuesses > 0) {
    // Game code goes here
    // Show the player their progress
    showPlayerProgress();
    // Take input from the player
    var guess = getGuess();
    noOfGuesses--;
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        guess = guess.toLowerCase();
        // Update the game state with the guess
        var correctGuesses = updateGameState();
        remainingLetters = remainingLetters - correctGuesses;
    }

}
showAnswerAndCongratulatePlayer();

function pickWord() {
    // Return a random word
    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray() {
    // Return the answer array
    var answArray = [];
    for (var i = 0; i < word.length; i++) {
        answArray[i] = "_";
    }
    return answArray;

}
function showPlayerProgress() {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));
}
function getGuess() {
    // Use prompt to get a guess
    return prompt("Guess a letter, or click Cancel to stop playing.");
}
function updateGameState() {     
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    var correctG = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            if (answerArray[i] !== "_") {
                alert("You have already guess the letter " + guess + ".");
                break;
            } else {
                correctG++;
                answerArray[i] = guess;
                
            }
        }
    }
    return correctG;
};
function showAnswerAndCongratulatePlayer() {
    // Use alert to show the answer and congratulate the player
    if (remainingLetters === 0) {
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word);
    } else if (noOfGuesses == 0){
        alert("you ran out of guesses");
    }else {
        alert("You ended the game");
    }
}
     