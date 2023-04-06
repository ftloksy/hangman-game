import React from 'react';

class ArrayDisplay extends React.Component {
  render() {
    // Extract the `array` prop from the `props` object
    const { array } = this.props;

    // Create an empty array to store the characters of the word
    const word = [];

    // Loop through each object in the array
    for (let i = 0; i < array.length; i++) {
      // Get the current object
      const obj = array[i];

      /**
       * If the object has a `found` property that is `true`,
       * use its `character` property
       * Otherwise, use an underscore character
       */
      const character = obj.found ? obj.character : '_';

      // Add the character to the `word` array
      word.push(character);
    }

    /**
     * Join the characters in the `word` array with
     * a space character and return them in a `div` element
     */
    return <div>{word.join(' ')}</div>;
  }
}

export default ArrayDisplay;

