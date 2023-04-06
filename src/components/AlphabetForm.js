import React, { Component } from 'react';
import CharacterButtonRow from './CharacterButtonRow';

/**
 * The AlphabetForm component renders a form
 * with the class charinput and multiple instances
 * of the CharacterButtonRow component,
 * each with a subset of the alphabet passed as a prop.
 * When a character button is clicked,
 * the handleCharacterClick method is called,
 * which prevents the default form submission behavior,
 * gets the value of the clicked button,
 * and calls the onSubmit prop method with
 * the clicked character as an argument.
 *
 * The endgame, tried, and resetButton props are also passed
 * to each CharacterButtonRow instance.
 */
class AlphabetForm extends Component {
  constructor(props) {
    super(props);

    // Store the props object as a property of the component instance
    this.props = props;

    // Define the starting and ending index of each row of buttons
    this.buttonsRow = [
      { start: 0, end: 4 },
      { start: 4, end: 8 },
      { start: 8, end: 12 },
      { start: 12, end: 16 },
      { start: 16, end: 20 },
      { start: 20, end: 24 },
      { start: 24, end: 26 },
    ];

    // Bind the handleCharacterClick method to the component instance
    this.handleCharacterClick = this.handleCharacterClick.bind(this);
  }

  // Event handler for when a character button is clicked
  handleCharacterClick(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the clicked button
    const character = event.nativeEvent.submitter.attributes.value.value;

    // Call the onSubmit prop method with the clicked character as an argument
    this.props.onSubmit(character);
  }

  render() {
    // Define the alphabet as a string
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Destructure the props object
    const { endgame, tried, resetButton } = this.props;

    return (
      // Render a form element with the charinput class and the handleCharacterClick method as the submit handler
      <form className="charinput" onSubmit={this.handleCharacterClick}>
        {this.buttonsRow.map((row) => (
          // Render a CharacterButtonRow component for each row of buttons
          <CharacterButtonRow
            // Pass the characters for the row as a prop
            characters={alphabet.slice(row.start, row.end).split('')}
            // Pass the endgame, tried, and resetButton props to the CharacterButtonRow component
            endgame={endgame}
            tried={tried}
            resetButton={resetButton}
          />
        ))}
      </form>
    );
  }
}

export default AlphabetForm;

