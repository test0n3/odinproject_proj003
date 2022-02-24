# Project 003 - Rock Paper Scissors

## Introduction

We’re going to make a simple implementation of grade-school classic “rock paper scissors”. If you don’t know what that is check the Wikipedia article or this ridiculous step-by-step. For the moment we’re just going to play the game from the browser console, but **we will revisit this project in a later lesson and add a Graphical User Interface with buttons and text,** so don’t forget to keep the code on GitHub! You might notice some ‘Live Preview’ links in the student solutions that have a GUI - this is coming in a later lesson. When you get there don’t forget to come back and add your link!

## Quick Exercises Before Starting

  1. Identify three ways to include JavaScript in a page.
  2. Test it out! Write *console.log("Hello World");* in JavaScript and check to see if it displays in the browser’s console.

Finally, this is your first JavaScript program built from scratch, so don’t forget the previous lesson on problem solving. Plan your solution out before writing any code, and test each piece as you build to ensure it is working before moving on to the next!

## Assignment

  1. Start a new Git repo for your project.
  2. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
  3. Your game is going to play against the computer, so begin with a function called **computerPlay** that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. *Tip: use the console to make sure this is returning the expected output before moving to the next step!*
  4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the *playerSelection* and *computerSelection* - and then return a string that declares the winner of the round like so: *"You Lose! Paper beats Rock"*
      1. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

  5. **Important note:** you want to *return* the results of this function call, not *console.log()* them. You’re going to use what you *return* later on, so let’s test this function by using console.log to see the results:

    ```javascript
      function playRound(playerSelection, computerSelection) {
        // your code here!
      }

      const playerSelection = "rock";
      const computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
    ```

  6. Write a NEW function called *game()*. Call the *playRound* function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

      1. Remember loops? This is a great opportunity to use one to play those five rounds:

        ```javascript
          for (let i = 0; i < 5; i++) {
          // your code here!
          }
        ```

      2. At this point you should be using *console.log()* to display the results of each round and the winner at the end.
      3. Use *prompt()* to get input from the user. [Read the docs here if you need to.](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
      4. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
      5. Feel free to create more “helper” functions if you think it would be useful.
