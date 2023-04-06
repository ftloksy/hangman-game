/* Import React and necessary components from react-router-dom library */
import React, { Component } from "react";

/* Import custom components */
import Hangman from "./Hangman";
import AlphabetForm from "./AlphabetForm";
import fs from '../assets/dictionary.txt';
import ArrayDisplay from './ArrayDisplay';
import RestartGame from './RestartGame';

class HangmanGame extends Component {
  constructor(props) {
    super(props);
    this.state = { // Setting the initial state of the component
      // step indicates the number of incorrect guesses made by the player
      step: 0, 

      /**
       * wordObj is an array of objects,
       * each containing a character and a boolean indicating
       * whether the player has guessed the character or not
       */
      wordObj: {},

      /**
       * winOrLost is a string indicating whether
       * the player has won or lost the game
       */
      winOrLost: "",

      // end is a boolean indicating whether the game has ended or not
      end: false,

      /**
       * triedCharacters is an array of characters that
       * the player has guessed already
       */
      triedCharacters: [],

      /**
       * restartGame is a boolean indicating
       * whether the game is being restarted or not
       */
      restartGame: false,
    };
    this.handleCharacterClick = this.handleCharacterClick.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
  }

  componentDidMount() {
    // Start Game from easy level.
    let randomRange = Math.floor(Math.random() * 2);

    // Call getAWordFromDictionary() method with word 3 + 0 or 3 + 1, easy. 
    this.getAWordFromDictionary(3 + randomRange);
  }

  // Method to update the state's wordObj asynchronously
  async updateWordObj(obj){ 
    await this.setState({wordObj: obj});
  }

  // Method to update the state's end asynchronously
  async updateEndGame(t){
    await this.setState({end: t});
  }

  // Method to update the state's winOrLost asynchronously
  async updateWinOrLost(msg){
    await this.setState({winOrLost: msg});
  }

  // Method to update the state's triedCharacters asynchronously
  async updateTriedCharacters(chars) {
    await this.setState({triedCharacters: chars});
  }

  /**
   * The handleCharacterClick function takes a char parameter
   * and is called when the user clicks on a letter button.
   * The function first checks whether the clicked character
   * has already been tried and if the game has not yet ended.
   *
   * If the character has not been tried and the game is still ongoing,
   * the function iterates through the wordObj array to check
   * if the clicked character matches any character in the array.
   * If a match is found,
   * the corresponding found property of
   * the character object is set to true,
   * indicating that the character has been correctly guessed.
   * If no match is found, the game's step count is incremented.
   *
   * The function then updates the triedCharacters array,
   * which tracks the characters that have already been tried.
   * It also calls the updateWordObj function to update
   * the wordObj state with the modified wordObj array,
   * and the updateTriedCharacters function
   * to update the triedCharacters state with the modified
   * triedCharacters array.
   * The reSetRestartGame function is called
   * to reset the restartGame state to false.
   * Finally, the winOrLost function is called
   * to check whether the game has ended and update the state
   * with the appropriate message.
   *
   * If the clicked character has already been tried
   * or the game has ended, the function simply returns. 
   */
  handleCharacterClick(char) {
    let chars = this.state.triedCharacters;
    if (chars.indexOf(char) === -1 && !this.state.end) {
	    let foundOne = false;
	    let wordObj = this.state.wordObj;
	    for (let i = 0; i < wordObj.length ; i ++) {
	      if (char === wordObj[i].character) {
	        wordObj[i].found = true;
	        foundOne = true;
	      }
	    }
	    if (!foundOne) {
	      this.setState((prevState) => ({ step: prevState.step + 1 }));
	    }
      chars.push(char);
	    this.updateWordObj(wordObj);
      this.updateTriedCharacters(chars);
      this.reSetRestartGame();
      this.winOrLost();
    }
    return ;
  }

  /**
   * This is the handleRestartGame function,
   * which is an asynchronous function that is triggered
   * when the user clicks the restart button.
   * The function resets the game state and fetches a new word
   * from the dictionary API with parameter level.
   *
   * Here are the steps performed by this function:
   *
   * It receives an event object as a parameter,
   * which is used to prevent the default behavior of the form submission.
   * It calls the setState method to update the state of the game. 
   */
  async handleRestartGame(event, level) {
    event.preventDefault();
    await this.setState({
      step: 0,
      wordObj: {},
      winOrLost: "",
      end: false,
      triedCharacters: [],
      restartGame: true,
    });
    let randomRange = Math.floor(Math.random() * 2);
    this.getAWordFromDictionary(3 + level + randomRange);
  }

  async reSetRestartGame() {
    await this.setState({ restartGame: false });
  }

  // Follow the wordObj to return game answer.
  getAnswer() {
    let answerWord = "";
    let wordObj = this.state.wordObj;
    for (let i = 0; i < wordObj.length ; i ++) {
       answerWord += wordObj[i].character;
    }
    return answerWord;
  }

  /**
   * This is a function called winOrLost that determines
   * whether the player has won or lost the game.
   *
   * The function first initializes a variable called allRight to true.
   * It then gets the wordObj array from the game's state,
   * which contains objects representing each character
   * in the word being guessed,
   * along with a boolean value indicating whether
   * that character has been correctly guessed.
   *
   * The function then loops through the wordObj array,
   * setting allRight to false
   * if it encounters a character object with a found value of false.
   *
   * If allRight is still true after the loop,
   * it means that all characters have been correctly guessed.
   * If the length of wordObj is greater than 1 and
   * step (the number of incorrect guesses made by the player) is less than 6,
   * the player wins the game.
   * The function then calls updateEndGame to set the game's end state to true,
   * and updateWinOrLost to display the message "Your Win".
   * 
   * If step is greater than or equal to 6,
   * the player has made too many incorrect guesses and has lost the game.
   * The function sets end to true and displays the message "Your Lost"
   * and game's answer.
   *
   * If neither of these conditions are met, the function returns null,
   * indicating that the game is still ongoing.
   */
  winOrLost() {
    let allRight = true;
    const wordObj = this.state.wordObj;
    for (let i = 0; i < wordObj.length ; i ++) {
      if (!wordObj[i].found) {
        allRight = false;
      }
    }
    if ( wordObj.length > 1 && allRight && this.state.step < 6) {
      this.updateEndGame(true);
      this.updateWinOrLost("Your Win")
    } else if ( this.state.step >= 10 ) {
      this.updateEndGame(true);
      this.updateWinOrLost("Your Lost, The answer is " + this.getAnswer() + ".")
    } else {
      return null;
    }
  }

  /**
   * This function uses the fetch API to retrieve a file
   * from the local file system,
   * then processes the contents of the file to extract words
   * of a given length.
   *
   * The function takes a single argument wordLength,
   * which is the length of the words to extract from the file.
   *
   * The fetch call is made to a file identified by the variable fs.
   * The response from this fetch call is then converted to text using
   * the .text() method,
   * which returns a promise that resolves to a string
   * containing the contents of the file.
   *
   * The function then processes the contents of
   * the file by splitting it into an array of lines,
   * and iterating through each line.
   * When it encounters a line containing the text "START",
   * it sets a flag isStartTriggered to true,
   * indicating that it should start processing words
   * from that point onward.
   * If the length of the current line matches the wordLength argument,
   * and isStartTriggered is true,
   * then the line is added to an array arr of words of the desired length.
   *
   * Finally, the function returns the array arr containing
   * all words of the desired length found in the file.
   */
  getAWordFromDictionary(wordLength) {
    fetch(fs)
      .then(r => r.text())
      .then(text => {
        const arr = [];
        let isStartTriggered = false;
        const lines = text.split('\n');
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].replace(/\r?\n|\r/g, '');
          if (isStartTriggered) {
            if ( line.length === wordLength ) {
              arr.push(line);
            };
          }
          if (line === 'START') {
            isStartTriggered = true;
          }
        }
        return arr;
      })
      .then(arr => {
        const gameArray = [];
        const randomIndex = Math.floor(Math.random() * arr.length);
        const choice = arr[randomIndex];
        for (const char of choice) {
          gameArray.push({ found: false , character: char });
        }
        this.updateWordObj(gameArray);
      })
  }

  /**
   * This is the render function of the App component.
   * It returns a JSX template that defines the layout of the Hangman game.
   */
  render() {
    
    const {step} = this.state ;

    return (
      <div id="game">
        <div className="left">
          <h1><ArrayDisplay array={this.state.wordObj} /></h1>
          <h1>{this.state.winOrLost}</h1>
          <Hangman step={step} />
        </div>
        <div className="right">
          <AlphabetForm 
            onSubmit={this.handleCharacterClick} 
            endgame={this.state.end} 
            tried={this.state.triedCharacters}
            resetButton={this.state.restartGame}
            />
        </div>
        <RestartGame className="restartgame" onRestartGame={this.handleRestartGame}/>
      </div>
    );
  }
}

export default HangmanGame;

