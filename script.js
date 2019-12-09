var words = [
    "lumber",
    "act",
    "mouth",
    "scarf",
    "hesitant",
    "mysterious",
    "makeshift",
    "depend",
    "acoustics",
    "steel",
    ];
    /////// Took the random from a website.
    /////////////////// Global Variables //////////
    // Pick a random word
        var word = words[Math.floor(Math.random() * words.length)]
        console.log(word)
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    
        var remLetters = word.length;
        var badGuess // put a bad guess here 
        var goodGuess // put a good guess here

    ///////////////////Game Loop //////////////////
    while (remainingLetters > 0) {
        if (guess === null) {
        // Exit the game loop
        break;
       } else {
//this needs to change input from clicking on the board is needed, and call the solver function
        
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess; remainingLetters--;
                        }
                }
        }
}

////////// End of game loop //////////////////////
        ////////// Start of modal conditions //////////////////////
    


        ////////// End  of modal conditions //////////////////////
        
////////////// Functions ///////////
//New Game
//Restart Game
//Cancel Game
//Quick Help
//ScreenMistakes
//ScreenCorrects
//ScreenPopulateSolution
//ScreenUpdateImage

//ScreenPopulateSolution
function ScreenPopulateSolution(){
for (let index = 0; index < word.length; index++) {
       
       var element = document.getElementsByClassName("solutionGroup")
       console.log(element)
       var node = document.createTextNode("This is New")
       element.appendChild(node)
       console.log(word.length)
        }
} // this will need to update solutionGroup
ScreenPopulateSolution()

//var word = pickWord();
//var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var pickWord = function () {
// Return a random word
};

var solver = function (word) {
        //if input letter matches a letter on the soloution populate the box and disable the box.
        //run this for each character in the word string.
        //if it doesn't match then add it to the wrongGuess array.
        };
        


//var showPlayerProgress = functin (answerArray)
//{
//Use alert to show the player their progress
//};

//var getGuess = function () {
// Use prompt to get a guess
//};

//var updateGameState = function (guess, word, answerArray) {
// Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
//};



// var showAnswerAndCongratulatePlayer = function (answerArray) {
//     // Use alert to show the answer and congratulate the player
//     };
//     while (remainingLetters > 0) {
//     showPlayerProgress(answerArray);
//     var guess = getGuess();
//     if (guess === null) {
//     break;
//     } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     var correctGuesses = updateGameState(guess, word, answerArray);
//     remainingLetters -= correctGuesses;
//     }
//     }
    
