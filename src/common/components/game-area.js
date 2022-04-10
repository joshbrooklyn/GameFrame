import React, { useState, useEffect } from 'react';
import ImageCarousel from './image-carousel';
import NewGuessArea from './new-guess-area';
import PreviousGuesses from './previous-guesses';

function GameArea(props) {
    const dailyGame = props.dailyGame;
     
    return (
        <div>
            <header>
                <div className="title">Game.Frame</div>
            </header>	  
            <ImageCarousel {...props} />      
            <NewGuessArea {...props} />
            <PreviousGuesses {...props} />
        </div>
    );
}

export default GameArea;