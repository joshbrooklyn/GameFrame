import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import GameArea from './common/components/game-area'
import useGameList from './common/hooks/use-gamelist'
import useDailyGame from './common/hooks/use-daily-game'
import ToastError from "./common/toast/toast-error";
//import ToastGameComplete from "./common/toast/toast-game-complete";
import useFieldState from './common/hooks/use-field-state'


function App() {
  const [error, setError] = React.useState(null);
  const { fields, changeField } = useFieldState();

  const {gameList} = useGameList(setError);
  const {dailyGame} = useDailyGame(setError);  

  function handleSubmitGuess() {
    const guess = fields.selectedGame;

    let newGuesses = [...fields.guesses];
    let newViewableScreenshots = fields.viewableScreenshots + 1;
    let newActiveImage = fields.activeImage + 1;
    newGuesses.push(guess);

    changeField("guesses", newGuesses);
    changeField("viewableScreenshots", newViewableScreenshots);
    changeField("activeImage", newActiveImage);
  }

  const renderMain = () => {
    if (gameList.length > 0 && dailyGame) {
      return(
        <GameArea 
          dailyGame={dailyGame} 
          fields={fields}
          gameList={gameList}
          setField={changeField}
          submitGuess={handleSubmitGuess}
        />
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }

  return (
    <div className="App">
      <Helmet>
        <title>Game.Frame</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Game.Frame" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>    
      {renderMain()}      
      <ToastError
      message={error && error.message}
      onClose={() => setError(null)}
      isOpen={error !== null}
      severity="error"
    />           
    </div>
  );
}

export default App;
