/**
 * The following code imports React and
 * GameLogo from '../assets/game.svg' 
 */
import React, { Component } from 'react';
import {ReactComponent as GameLogo} from '../assets/game.svg';

/** 
 * This class defines a header component that displays a logo,
 * the name of the company,
 * and the username of the logged-in user
 */
class Header extends Component {
  
  render() {
    return (
      <header>
        <GameLogo width="400px" height="200px" />
        <h1>Wellcome</h1>
      </header>
    );
  }
}

export default Header;
