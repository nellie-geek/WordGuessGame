    //Variables  
    var fruits = ["apple", "orange", "strawberry", "mango", "kiwi", "pomegranate", "banana", "grapes", "cherries", "watermelon", "kumquat", "blackberry", "papaya", "fig", "boysenberry", "lime", "lemon", "cranberry"];    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];       
    var fruit = fruits[Math.floor(Math.random() * fruits.length)];
    var wins = 0; 
    var guessLeft = 10;
    var answerArray = [];

    // Variables to point to HTML element to input value.
    var winsText = document.getElementById("wins-text");
    var guessesleftText = document.getElementById("guesses-left-text");
    var lossesText = document.getElementById("letterGuess");
    var wordDis = document.getElementById("fruit");

    //Processes
    function getWord(var i = 0; i < fruit.length; i++) {    

        var fruits = [];
            for (var i = 0; i < fruit.length; i++) {
                answerArray[i] = "_";
                document.getElementById(fruit).innerHTML = fruits[Math.floor(Math.random() * fruits.length)]
            }
    
        for (var i = 0; i < fruit.length; i++) {
            answerArray[i] = "_";
        
            document.onkeyup = function(event) {
            console.log("working")
            var letterGuess = event.key;
                        
            
            if (letterGuess === answerArray) {
                letterGuess.textContent = event.key;
                
                } 
        
            }  
        }
            if (remainingGuesses > 0){
            answerArray.join(" ")
        
            var letterGuess = onkeyup.event
                    
            //check letter to word
            for (var i = 0; i < word.length; i++) {
                //in the word index
                if (word[i] === letterGuess) {
                    answerArray[i] = letterGguess;
                    guessleft--;
                }
            }
        
        }
    }