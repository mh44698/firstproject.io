const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
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
const pics = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg']
    /////// Took the random from a website.
    /////////////////// Global Variables //////////
    // Pick a random word
        var word = words[Math.floor(Math.random() * words.length)]
        console.log(word)
        var remainingLetters = word.length;
        var badGuess // put a bad guess here 
        var goodGuess // put a good guess here
        var errorCounter

// console.log(pics[1])
    ///////////////////Game Loop //////////////////
    while (remainingLetters < 0) {
        // if clicked letter matches the word 
        //add event listener to 
        // Exit the game loop

//this needs to change input from clicking on the board is needed, and call the solver function
        
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess; remainingLetters--;
                        }
                }
        }


////////// End of game loop //////////////////////
        ////////// Start of modal conditions //////////////////////
    


        ////////// End  of modal conditions //////////////////////
        
////////////// Functions ///////////
//New Game
function newGamed(){
        location.reload()
}
//Quick Help
function qhelp(){
         document.getElementById("quickHelp").innerHTML = word
        setTimeout(clearing, 250)
        }
function clearing(){   
        document.getElementById("quickHelp").innerHTML = ""}

//ScreenPopulateSolution - This populates the empty boxes
function ScreenPopulateSolution(){
for (let index = 0; index < word.length; index++) {
       var iDiv = document.createElement('div');
       iDiv.id = 'block'+[index];
       iDiv.className = 'block';
       //console.log('iDiv',iDiv)
       // Then append the whole thing onto the body
       document.querySelector('.solutionGroup').appendChild(iDiv);
       //console.log(document.querySelector('.solutionGroup'))
        }
} 
ScreenPopulateSolution()


////// input listener ///////
let elementsArray = document.querySelectorAll(".alpha");
function getLetter(letter){
elementsArray.forEach(function(elem) {
        let elementsArray = document.querySelectorAll(".alpha");
        elem.addEventListener("click", function(e) {  
        // console.log("elem",e)  
        letter = e.target.textContent 
        // if word contains letter show position
        if(word.includes(letter)){
                console.log("winner winner chicken dinner")
        }else{
                errorCounter ++
                if (errorCounter < 9
        
        }
        //console.log("letter",letter)
        })
       // elem.querySelector("click",).disabled = true
})
}
//console.log(getLetter())

getLetter()


var solver = function (word) {
        //if input letter matches a letter on the soloution populate the box and disable the box.
        //run this for each character in the word string.
        //if it doesn't match then add it to the wrongGuess array.
        };
        





//var updateGameState = function (guess, word, answerArray) {
// Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
//};





    
/// how to change a Pic in HTML
// function changePic(){
//         document.getElementsByClassName("hmpic").src = "1.jpeg";
//         console.log("changePic",changePic)
// }
// changePic()


////// Sources
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//https://www.computerhope.com/issues/ch001709.htm

//https://teamtreehouse.com/community/elementappendchild-returning-error-appendchild-is-not-a-function

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes