/* This is a component for restarting the game */
import React, { Component } from 'react';

class RestartGame extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  /* This is a private method that returns an SVG image of a start button */
  start() {
    return (
      <svg width="25" height="25" style={{backgroundColor: "#aabb9e"}}>
        <polygon points="12.5,3.333 15.414,9.234
          21.798,9.234 16.169,14.17
          18.455,20.002 12.5,16.2
          6.545,20.002 8.831,14.17
          3.202,9.234 9.586,9.234" fill="yellow" />
      </svg>
    )
  }

  /* This is a method to render the component */
  render() {
    /* Get the onRestartGame prop from the parent component */
    const onRestartGame = this.props.onRestartGame;
    /**
     * Return a div that contains three buttons with different levels
     * of difficulty and the start button image
     */
    return (
      <div>
        <h3>Restart the Game</h3>
	      <button onClick={(e) => onRestartGame(e, 0)}>
	       {this.start()} Easy
	      </button><br/>
	      <button onClick={(e) => onRestartGame(e, 2)}>
	       {this.start()} {this.start()} Middle
	      </button><br/>
	      <button onClick={(e) => onRestartGame(e, 4)}>
	       {this.start()} {this.start()} {this.start()} Harder 
	      </button><br/>
      </div>
    );
  }
}

export default RestartGame;
