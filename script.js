
// var words = [
//     "lumber",
//     "act",
//     "mouth",
//     "scarf",
//     "hesitant",
//     "mysterious",
//     "makeshift",
//     "depend",
//     "acoustics",
//     "steel",
//     ];

/////////////////// Global Variables //////////
var remainingLetters = 0;
var errorCounter = 0
var goodCounter = 0
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const pics = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg']
// var word = words[Math.floor(Math.random() * words.length)]

////////////////// API Addition /////////////////
// Key Generator https://random-word-api.herokuapp.com/key?
let randomWord = `https://random-word-api.herokuapp.com//word?key=PH143S98&number=1`
fetch(randomWord)
.then(res => res.json())
.then(word => {
        word = word[0]
        remainingLetters = word.length;
        getLetter(word)
        ScreenPopulateSolution(word)
        console.log("this is the solution",word)
        qhelp(word)
        })

////////// Start of game loop //////////////////////
////// input listener ///////
let elementsArray = document.querySelectorAll(".alpha");
function getLetter(word){
elementsArray.forEach(function(elem) {
        let elementsArray = document.querySelectorAll(".alpha");
        elem.addEventListener("click", function(e) { 
        var letter = e.target.textContent 
        e.target.disabled = true
        e.target.classList.add("buttonDisable")
        // if word contains letter show position
        if(word.includes(letter)){
                for (let index = 0; index < word.length; index++) {
                        if(letter == word[index]){
                                goodCounter ++
                                concat = `#block${index}`
                                var position = document.querySelector(concat)
                                position.innerText = letter
                                if(word.length == goodCounter){  
                                        // disable all keys
                                        // display no keys and populate message.
                                        clearkeyboard(`You Win!!!! Solution - ${word}`)
                                        // No more errors left
                                        var div = document.querySelector(".errors")
                                        div.innerText = ""                  
                                        }
                                }
                        }
        }else{
        errorCounter ++
        errorLeft = 9 - errorCounter
        var div = document.querySelector(".errors")
        div.innerText = errorLeft
        let picInc = `${errorCounter+1}.jpeg`
        document.querySelector(".hmpic").src = picInc;
        if(errorLeft === 0){
        clearkeyboard(`You Loose!!!! Solution - ${word}`)
                        } 
                }
        })
})
}
////////// End of game loop //////////////////////

////////////// Functions ///////////
//New Game
function newGamed(){
        location.reload()
}
//Quick Help - this was broken when API upgraded
function qhelp(word){
        document.getElementById("quickHelp").innerHTML = word
        setTimeout(clearing, 500)
function clearing(){   
        document.getElementById("quickHelp").innerHTML = ""}
}
//ScreenPopulateSolution - This populates the empty boxes
function ScreenPopulateSolution(word){
        for (let index = 0; index < word.length; index++) {
        var iDiv = document.createElement('div')
        iDiv.id = 'block'+[index]
        iDiv.className = 'block'
        document.querySelector('.solutionGroup').appendChild(iDiv)
                }
        } 

// This funtion clears the Keyboard and show message at game end
function clearkeyboard(status){
        var idiv = document.querySelector('.keyboardletters')
        for (let idx = 0; idx < 52; idx++) {
        var idiv = document.querySelector('.keyboardletters')
        idiv.removeChild(idiv.firstChild)
        }
        var iDiv = document.createElement('div')
        iDiv.id = 'endgameText'
        iDiv.className = 'endgameText'
        document.querySelector('.keyboardletters').appendChild(iDiv)
        document.getElementById("endgameText").innerHTML = status
        }

// To do' :
// Disable keystorkes/clicking on win/loose // Done
// KeyStrokes - possible improvement
// Modals // Not going to do this as of now.  I like the clean page.
// Kenny says Api // Done - Also killed my on click Hint.


