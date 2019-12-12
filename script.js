// fetchRandomWord()
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
//getting a new API key 
//'https://random-word-api.herokuapp.com/key?'

let randomWord = ` https://random-word-api.herokuapp.com//word?key=TJ8DO0M9&number=1`
fetch(randomWord)
.then(res => res.json())
.then(word => {
        // comment this next line to see if API key if void.
        word = word[0]
        remainingLetters = word.length;
        qhelp(word)
        getLetter(word)
        ScreenPopulateSolution(word)
        console.log("this is the solution",word)
        })

////////// Start of game loop //////////////////////
////// input listener ///////
let elementsArray = document.querySelectorAll(".alpha");
function getLetter(word){
elementsArray.forEach(function(elem) {
        let elementsArray = document.querySelectorAll(".alpha");
        elem.addEventListener("click", function(e) {  
        // console.log("elem",e)  
        var letter = e.target.textContent 
        e.target.disabled = true
        e.target.classList.add("buttonDisable")
        // if word contains letter show position
        if(word.includes(letter)){
               // console.log("choose correctly")
                for (let index = 0; index < word.length; index++) {
                        if(letter == word[index]){
                                goodCounter ++
                                concat = `#block${index}`
                                //console.log(concat)
                                var position = document.querySelector(concat)
                                //console.log("this is position",position)
                                position.innerText = letter
                                if(word.length == goodCounter){
                                        //console.log("You Win! Have a cookie! Insert winning modal here")  
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
        //console.log("error",errorCounter)
        errorLeft = 9 - errorCounter
        var div = document.querySelector(".errors")
        div.innerText = errorLeft
        let picInc = `${errorCounter+1}.jpeg`
        //console.log("Pic Address", picInc)
        document.querySelector(".hmpic").src = picInc;
        if(errorLeft === 0){
        clearkeyboard(`You Loose!!!! Solution - ${word}`)
        //console.log("its over sucka insert loosing modal here")  
        // insert Loosing modal here
        } 
        //console.log("error Left", picInc)
        }
        //console.log("letter",letter)
        })
       // elem.querySelector("click",).disabled = true
})
}

////////// End of game loop //////////////////////
////////// Start of modal conditions //////////////////////
////////// End  of modal conditions //////////////////////

////////////// Functions ///////////
//New Game
function newGamed(){
        location.reload()
}
//Quick Help - this was broken when API upgraded
function qhelp(word){
        document.getElementById("quickHelp").innerHTML = word
        setTimeout(clearing, 500)
        }

function clearing(){   
        document.getElementById("quickHelp").innerHTML = ""}

//ScreenPopulateSolution - This populates the empty boxes
function ScreenPopulateSolution(word){
        //console.log(word.length)
        for (let index = 0; index < word.length; index++) {
        var iDiv = document.createElement('div');
        iDiv.id = 'block'+[index];
        iDiv.className = 'block';
        //console.log('iDiv',index)
        document.querySelector('.solutionGroup').appendChild(iDiv);
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
        //console.log(document.querySelector('#endgameText'))
        }




// To do' :
// Disable keystorkes/clicking on win/loose // Done
// KeyStrokes - possible improvement
// Modals // Not going to do this as of now.  I like the clean page.
// Kenny says Api // Done - Also killed my on click Hint.


////// Sources
//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//https://www.computerhope.com/issues/ch001709.htm

//https://teamtreehouse.com/community/elementappendchild-returning-error-appendchild-is-not-a-function

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// access keys https://stackoverflow.com/questions/5061353/how-to-create-a-keyboard-shortcut-for-an-input-button/5062680