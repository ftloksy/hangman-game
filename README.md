# Hangman Game

This is a simple Hangman game built with React.
The game randomly selects a word from a dictionary file
and the player has to guess the word by suggesting letters.
The game ends either when the player successfully
guesses the word or when the hangman is fully drawn
(i.e., the player makes 10 wrong guesses).

## How to play

Clone or download the project from the GitHub repository:
https://github.com/frankie/hangman-game

Install the required dependencies by running
the following command in your terminal:

        npm install

Start the game by running the following command in your terminal:

        npm start

Open your web browser and go to http://localhost:3000 to access the game.

That's it! You should now be able to play the Hangman React Game
on your local machine.

## How to Play

Once the app is running, you will see a number
of underscores representing the letters of the secret word,
and a set of letters to choose from at the middle of the screen.

If the letter is in the word, it will replace one or more of the underscores.
If the letter is not in the word,
the hangman will be drawn one step closer to completion.

Continue guessing letters until you either guess the entire word (you win)
or the hangman is fully drawn (you lose).

To start a new game, 
click on the "New Game" button at the right-hand side of the page.

## Dependencies

The project was built with the following dependencies:

 - React (version 16.8.6)
 - React DOM (version 16.8.6)
 - node-fetch (version 2.6.1)
 - react-markdown (version 8.0.6)
 - react-router-dom (version 6.10.0)

## Acknowledgments

The dictionary file used in this game is from the English Words
repository by __DWYL__ .

## Contributors

This app was created by Frankie. If you have any questions or feedback, please feel free to reach out to me. Thanks for playing!
