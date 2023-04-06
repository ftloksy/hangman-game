/**
 * this component is responsible for rendering
 * a row of CharacterButton components,
 * and provides functionality for resetting the state of
 * each CharacterButton instance when a resetButton prop is received.
 */
import React, { Component } from 'react';
import CharacterButton from './CharacterButton';

/**
 * This is the CharacterButtonRow component that renders
 * a row of CharacterButton components.
 */
class CharacterButtonRow extends Component {
  
  /**
   * The component initializes its state with an array of characters
   * passed from its parent component, AlphabetForm.
   *
   * The component initializes an array of buttonRefs,
   * which are used to reference the CharacterButton instances
   * in the row.
   */
  constructor(props) {
    super(props);
    this.state = {
      characters: this.props.characters
    };

    this.buttonRefs = [];
    this.props.characters.forEach((character, index) => {
      this.buttonRefs[index] = React.createRef();
    });
  }

  /**
   * The componentDidUpdate lifecycle method
   * is called when the component updates,
   * and if the resetButton prop has changed from false to true,
   * it calls the resetButtons method.
   */
  componentDidUpdate(prevProps) {
    if (this.props.resetButton && !prevProps.resetButton) {
      this.resetButtons();
    }
  }

  /**
   * The resetButtons method loops through
   * the buttonRefs array and calls the resetClickedState method
   * on each CharacterButton instance that exists.
   */
  resetButtons() {
    this.buttonRefs.forEach((buttonRef) => {
      if (buttonRef.current) {
        buttonRef.current.resetClickedState();
      };
    });
  }

  /**
   * The component then renders each CharacterButton
   * in the row by mapping over the characters array and
   * passing each character, endgame, tried,
   * and the corresponding buttonRef.
   * The ref prop is used to assign a reference to each CharacterButton
   * instance to its corresponding buttonRef.
   */
  render() {
    const { endgame, tried } = this.props;
    const { characters } = this.state;
    return (
      <div>
        {characters.map((character, index) => (
          <CharacterButton
            key={character}
            character={character}
            endgame={endgame}
            tried={tried}
            ref={this.buttonRefs[index]}
          />
        ))}
      </div>
    );
  }
}

export default CharacterButtonRow;

