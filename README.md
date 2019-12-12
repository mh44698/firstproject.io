# firstproject.io
This is the first GA project - Hang Man

What makes your project stand out?
I have a rather simple code to sort through good guesses and bad guess.  I tightly intergated my code, and have tested it with words that have multiple same letters.  I have a cheat for the users at refresh.

Code Example

This code has the capabilities of taking an array of random words via an API or with minimal modification, an array.  After that is complete, there are a few functions that are called to take input from a user to guess letters on the letter pad and disable that button from being called again.  Once the guesses are made the letter is then sorted between a True if it is included or a False if it isn't included in the word.
    If the letter is in the word, the code will populate the letter in the solution boxes in the correct location given the word being solved.  And will loop through the whole word as some words have repeating letters. This will continue until all letters are solved, and once solved, the letter board will disappear, and "You Win!!" will appear.  To Play again click the play again button.
    If the letter isn't in the word, the code will populate a piece of the hangman, it will also decrement the Errors remaining.  If the errors exceed 9 tries (the amount of body parts and tree pieces), the letter board will disapear, and "You Lose!!" with the word, will apear, and the game will be over.  To play again, you will click on the play again button, or refresh the page.

Installation
You will need to navigate your web browser to the following link.
https://mh44698.github.io/firstproject.io/ 

API Reference
The API I used was rather simple. 
https://random-word-api.herokuapp.com//word?key=R9LU41U1&number=1
This is where I struggled with having a sustainable project.
The key is constantly changing due to the sources API enivronment.  I have investigated alternative sources with better policies concerning Key requirements and unfortunately thier timeline didn't match up with my deadline for completion.

How to use?
This is fairly straight forward.  Click on refresh and start hitting random letters until your mind has developed more educated guesses.  This will sharpen your skills as you continue to play.

Contribute
Feel free to submit pull requests that take into consideration the base code as a structure for operations and any enhancements should be those that improve either performance or fix known issues.  I will review changes and incorperate them as necessary.

Credits
I have been blessed with the oppurtunity to develop this code with the help of my General Assembly mentors, as a member of the SEIR-1118 cohert, my peers have been very helpful.  I also have been lucky enough to learn to code JScript in the days of Google.  The following Links have helped get me past some very big hurdles.

Sources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

https://www.computerhope.com/issues/ch001709.htm

https://teamtreehouse.com/community/elementappendchild-returning-error-appendchild-is-not-a-function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

https://stackoverflow.com/questions/5061353/how-to-create-a-keyboard-shortcut-for-an-input-button/5062680


License
Holmes' Hangman is not copywrited, trademarked, or protected in any way.  Take what you want and leave what you may, and have a great day.

GA © Mark Holmes