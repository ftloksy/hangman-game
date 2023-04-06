// The import statement imports the necessary dependencies.
import React, { Component } from 'react';

/**
 * The CharacterButton class is defined,
 * which extends the Component class from React.
 *
 * It define 26 buttons [a-z],
 * User can use the buttons to input his choice's character.
 * When user click any buttons, that buttons will change to
 * another color and disable the click event handler.
 * So in the Hangman Game, User just can click every button.
 * when every round till user restart the game.
 */
class CharacterButton extends Component {

  /**
   * In the constructor,
   * the clicked state is initialized to false
   * and the character prop is set as the component's own state.
   * The handleClick method is bound to the component's this context.
   */
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      character: props.character
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * There is an async resetClickedState method
   * which resets the clicked state to false.
   * This method will call by CharacterButtonRow component.
   */
  async resetClickedState() {
    await this.setState({clicked: false});
  }

  /**
   * The handleClick method checks whether the game has ended
   * or whether the current character has already been tried.
   * If either of these conditions is true,
   * the method returns without doing anything.
   * Otherwise, it toggles the clicked state of the component using setState.
   */
  handleClick() {
    const {endgame, tried, character} = this.props;
    if (endgame || tried.indexOf(character) !== -1 ) {
      return;
    }
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }

  /**
   * The render method returns a button element with the character value
   * as the value attribute.
   * The button's background color depends on the clicked state,
   * which is determined by the bgColor variable.
   * The button also contains an SVG element with the character
   * as the text content.
   */
  render() {
    const { character, clicked } = this.state;
    const bgColor = clicked ? '#00FF00' : '#FFFFFF';

    return (
      <button 
        type="submit"
        value={character}
        onClick={this.handleClick}
        style={{backgroundColor: bgColor}}
        >
        <svg width="50" height="50">
          <text x="25" y="30" font-size="42"
            text-anchor="middle"
            dominant-baseline="middle">
            {character}
          </text>
        </svg>
      </button>
    );
  }
}

/**
 * Finally, the CharacterButton component is exported
 * as the default export of the module.
 */
export default CharacterButton;
