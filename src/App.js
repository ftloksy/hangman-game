/**
 * This is the main App file for the Hangman game. 
 * It is responsible for rendering
 *  the overall page layout by using several components.
 *
 * Here's a breakdown of the components being used:
 *
 *   Header: This component displays
 *       the title and subtitle of the game at the top of the page.
 *   PageRouter: This component handles the routing
 *       of different pages of the app, such as the Introduce page and the Help page.
 *   HangmanGame: This is the main
 *       game component where the actual game is played.
 *   Footer: This component displays some information at the bottom of the page.
 *      include the follow me link and copyright notes.
 */
import './App.css';
import HangmanGame from './components/HangmanGame';
import Header from './pages/Header';
import Footer from './pages/Footer';
import PageRouter from './components/PageRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <PageRouter />
      <HangmanGame />
      <Footer />
    </div>
  );
}

export default App;
