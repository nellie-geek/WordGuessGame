    // To store and displayer player letter choice
    var letterGuess 

    // Calculates guesses and number remaining
    var guessesLeft

    // Array of words
    var fruits = ["apple", "orange", "strawberry", "mango", "kiwi", "pomegranate", "banana", "grapes", "cherries", "watermelon", "kumquat", "blackberry", "papaya", "fig", "boysenberry", "lime", "lemon", "cranberry"]

    // Array of letters to pick from
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    // Pick random fruit from fruits array
    var fruit = fruits[Math.floor(Math.random() * fruits.length)]
    console.log(fruit)

    // sets answer array to show dashes for letters in the word
    var answerArray = [];
    for (var i = 0; i < fruits.length; i++) {
        answerArray[i] = "_";
    }
    
    //   PROCESSES
    
    //get guess 
    var letterGuess = onkeyup()

//     for (i = 0; i , letters.length; i++) {

// }

// if {
//     letterGuess === letterwithinword
//     displayletter in correctposition
// } else if {
//     fruit[i] === (letterGuess) 
//     display in picks
//     -1 on guessesremaining
// }



// for (i = 0; i < fruits.length; i++) {

// }

// if {
//     display word in dashes based on length
//     add letter in correct position upon keyup event 
// } else {
//     verify word if letter !== spot in word add to guessed and -1 on remaining
// }