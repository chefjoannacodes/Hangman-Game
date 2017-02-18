var wordList = [
    "pizza",
    "clarity",
    "peace",
    "rosemary",
    "thyme",
    "sage",

];

var chosenWord = ""; //when select word at random from the wordList

var lettersInChosenWord = []; //word that is played on is going to break it up into letters

var numBlanks = 0; //will hold the number of letters in the word

var blanksAndSuccesses = []; //will store the right or wrong letters. stores underscores or letters

var wrongGuesses = []; //stores the wrong letter guesses

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 9; //only have 9 lives

//var pressStart = "";

//var hangmanImg = [];



/*
    1. select a word at random
    2. want to break up that random word into letters and replace them with underscores
    3. we want to add those underscores to the HTML
    4. numguesses always equals 9, and blankandsuccess is an empty array. and wrongguesses is empty as well
    */


function startGame() { 
    numGuesses = 9;
    blanksAndSuccesses = []; //makes empty at start
    wrongGuesses = []; //makes empty at start

	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	lettersInChosenWord = chosenWord.split("");
	numBlanks = lettersInChosenWord.length;
	console.log(chosenWord);
	console.log(numBlanks);

	for (var i = 0; i < numBlanks; i++) {
	    blanksAndSuccesses.push("_");
	}
	console.log(blanksAndSuccesses);
	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guesses-left').innerHtml = numGuesses;
};

function checkLetters(letter){ //function that gets input from the user
    
    var letterInWord = false;
//1. Compare the letter the user picks matches any of the letters in the word
//2. I want a conditional statement to determine if the letter the user picked is in the word. If so, do something, if not, do something else.
    for(var i = 0; i < numBlanks; i++){
        if (chosenWord[i] === letter){
            letterInWord = true;

        }
    }
//will only run if above for loop is true
    if(letterInWord){
        for (i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
            console.log("inside our checkletter function", blanksAndSuccesses);
        }
        //3. If the user is wrong we want to decrease the numGuesses variables by one
    }else{ //if letter is wrong
        numGuesses --;
        wrongGuesses.push(letter);
    }
    console.log("our wrong guesses inside our checkletter function", wrongGuesses);
};
/* to check if a letter is already in teh wrong guesses array. set up an if/else conditional that will run a for loop that will iterate ocer all teh letters and then use the if/else to check if it already exists. 
 */

function roundComplete() {
    /*
    1. Its going to update the HTML with the letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the wrong guesses
    4. Its going to determine whether the user won the game or not
    */
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");



        console.log(lettersInChosenWord);
        console.log(blanksAndSuccesses);
    	if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
    		winCounter++;
    		alert("You win!!");
    		document.getElementById('win-counter').innerHTML = winCounter;
    		startGame();
    	}else if(numGuesses === 0){
    		document.getElementById('loss-counter').innerHTML = lossCounter ++;
    		document.getElementById('wrong-guesses').innerHTML = " ";
    		alert("you don't have anymore guesses left");
            playButton.style.visibility = "visible";
    		//startGame();

    	}


    

};
    startGame(); 
    
    document.onkeyup = function(){
        
        
            //alert("press any key to start");
            //console.log("starting game", startGame);
            /*var anyLetter = String.fromCharCode(event.keyCode).toLowerCase();
            alert ("Press any key to start");*/

        /*
        1. its going to take in the letter that we type in
        2. its going to pass it through the CheckLetter function
        */
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter we type", letterGuessed);
        checkLetters(letterGuessed);
        roundComplete();


        
            

};

var reloadPage = function() {
    var playButton = document.getElementById('play');
    playButton.style.visibility = "hidden";
    startGame();
}


    
