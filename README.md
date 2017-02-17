# Hangman-Game


## Live Link (If relevant)
 - www.example.com

## This program works like hangman in real-time. The user touches a letter on the keyboard in attempt to guess the correct letters in the word. The number of blanks (underscores) on the screen denote the number of letters in the word. The user has 9 tries to guess all the letters correctly. If the user guesses the letters incorrectly, a part of the hangman figure will appear on the screen. If the letters are not guessed correctly in 9 tries, the hangman figure is hanged and the user loses. If the letters are guessed correctly before the 10th try, the user wins and the game resets to 9 guesses and another random word is choosen to start the game. 

## Requirements
#### Using HTML, CSS, and Javascript, make a hangman game,

1. [Watch the demo](hangman-game-demo.mov).

2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

3. Use key events to listen for the letters that your players will type.

4. Display the following on the page:

  * Press any key to get started!

  * Wins: (# of times user guessed the word correctly).

    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

  * Number of Guesses Remaining: (# of guesses remaining for the user).

  * Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

5. After the user wins/loses the game should automatically choose another word and make the user play it.

## Technologies Used
#### 
- HTML
- CSS
- Javascript

## Code Explaination
- I used a for-loop to determine if the user's letter key input was in the chosen word. If the letterInWord variable was true, our blanksAndSuccesses would hold that letter in it's array. If letterInWord was false, we would execute our else statement. In this case, our number of guesses would increase, and our wrongGuesses variable would hold the wrong letters guessed in its array. 

```
var chosenWord = ""; //when select word at random from the wordList

var letterInChosenWord = []; //word that is played on is going to break it up into letters

var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;

        }
    }
//will only run if above for loop is true
    if (letterInWord) {
        for (i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    } else { //if letter is wrong
        numGuesses --;
        wrongGuesses.push(letter);
}}
```



