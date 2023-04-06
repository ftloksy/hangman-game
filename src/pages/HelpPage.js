import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * The component with a string containing a markdown-formatted
 * help for Hangman game.
 */
class HelpPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    // Setting the initial state.
    this.helpGame = `
# Hangman Game Help

Welcome to the Hangman game! The objective of this game is to guess a hidden word by suggesting letters. You have six chances to make an incorrect guess, and with each incorrect guess, a part of a hangman's body is drawn.

## Here are the basic rules of the game:

  - __A hidden word is chosen randomly__, 
      and the length of the word is indicated with blanks on the screen.

  - __You can guess a letter__
      by clicking on the corresponding button in the alphabet list.

  - __If the guessed letter is in the word__,
      the corresponding blank(s) will be filled with the letter.

  - __If the guessed letter is not in the word__,
      a body part of the hangman will be drawn.

  - __You win__ if you can guess the entire word before the entire
      hangman is drawn,

  - __You__ lose if the hangman is completely drawn
      before you can guess the word.

To request help at any time during the game,
simply click the "Help" button on the screen.
This will bring up a pop-up window with these rules.

Good luck, and have fun playing Hangman!
`;
  }

  render() {
    return (
      <ReactMarkdown children={this.helpGame} />
    );
  }
}

export default HelpPage;
