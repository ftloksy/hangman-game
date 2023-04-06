import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * The component with a string containing a markdown-formatted
 * introduction to the Hangman game.
 */
class Introduce extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    // Setting the initial state.
    this.introGame = `
# Hangman: A Classic Word Game

Hangman is a classic word game that is
easy to learn but difficult to master.
The goal of the game is to guess a secret word by
suggesting letters. If you guess a letter that is in the word,
the other player will write it in all of its correct positions.
If you guess a letter that is not in the word,
the other player will draw a part of a hangman.
The game ends when you either guess the word
or when the hangman is complete.

Hangman is a great game for all ages and
can be played with a group of friends or family members.
It is also a fun game to play online.
There are many different websites that offer Hangman games,
and you can even create your own Hangman game
using a variety of online tools.

If you are looking for a fun and challenging word game,
Hangman is a great option.
It is a game that can be enjoyed by people of all ages,
and it is a great way to improve your vocabulary.

## Here are some tips for playing Hangman:

 - __Start by guessing common letters.__ 
  This will help you to eliminate letters that are not in the word.

 - __Pay attention to the other player's reactions.__ 
  If they seem to be struggling,
  you may be able to guess the word by suggesting letters
  that they are likely to have already guessed.

 - __Don't be afraid to make guesses.__ 
  Even if you guess a letter that is not in the word,
  you will still learn more about the word
  and be closer to guessing it correctly.

 - __Have fun!__ 
  Hangman is a game, so don't take it too seriously.
  Just relax and enjoy the challenge.
`;
  }

  render() {
    return (
      <ReactMarkdown children={this.introGame} />
    );
  }
}

export default Introduce;
