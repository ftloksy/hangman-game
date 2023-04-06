import './App.css';
//import HiddenWordGame from './components/HiddenWordGame';
import HangmanGame from './components/HangmanGame';
import Header from './components/Header';
import Footer from './components/Footer';
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
