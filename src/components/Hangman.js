import React, { Component } from "react";

/** 
 * The gallows and hangman parts are drawn
 * using line and circle elements,
 * each with their own x and y coordinates and other styling attributes.
 *
 * Each hangman part is conditionally rendered based
 * on the step prop that is passed to the component.
 * The step prop represents the number of incorrect guesses
 * the user has made,
 * and determines which parts of the hangman are displayed.
 *
 * The number of wrong guesses is also displayed as text below the hangman.
 */
class Hangman extends Component {

  render() {
    const { step } = this.props;

    return (
      <div class="hangman">
        <svg width="400" height="400">
          {/* gallows */}
          {step >= 1 && (
            <line x1="50" y1="350" x2="150" y2="350" stroke="black" strokeWidth="5" />
          )}
          {step >= 2 && (
            <line x1="100" y1="350" x2="100" y2="50" stroke="black" strokeWidth="5" />
          )}
          {step >= 3 && (
            <line x1="100" y1="50" x2="250" y2="50" stroke="black" strokeWidth="5" />
          )}
          {step >= 4 && (
          <line x1="250" y1="50" x2="250" y2="100" stroke="black" strokeWidth="5" />
          )}

          {/* head */}
          {step >= 5 && (
            <circle cx="250" cy="125" r="25" stroke="black" strokeWidth="5" fill="white" />
          )}

          {/* body */}
          {step >= 6 && (
            <line x1="250" y1="150" x2="250" y2="250" stroke="black" strokeWidth="5" />
          )}

          {/* left arm */}
          {step >= 7 && (
            <line x1="250" y1="175" x2="225" y2="200" stroke="black" strokeWidth="5" />
          )}

          {/* right arm */}
          {step >= 8 && (
            <line x1="250" y1="175" x2="275" y2="200" stroke="black" strokeWidth="5" />
          )}

          {/* left leg */}
          {step >= 9 && (
            <line x1="250" y1="250" x2="225" y2="275" stroke="black" strokeWidth="5" />
          )}

          {/* right leg */}
          {step >= 10 && (
            <line x1="250" y1="250" x2="275" y2="275" stroke="black" strokeWidth="5" />
          )}

          {/* wrong guesses */}
          <text x="50" y="390" fontSize="30">
            Wrong Guesses:
          </text>
          <text x="325" y="390" fontSize="30" id="wrong-guesses">
            {step}
          </text>
        </svg>
      </div>
    );
  }
}

export default Hangman;

