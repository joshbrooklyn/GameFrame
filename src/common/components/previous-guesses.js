import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CancelIcon from '@mui/icons-material/Cancel';
import HelpIcon from '@mui/icons-material/Help';

function PreviousGuesses(props) {
    //const dailyGame = props.dailyGame;
    const guessesRemaining = props.dailyGame.game.screenshots.length - props.fields.guesses.length;
    
    let emptyGuesses = [];
    for (let i = 0; i < guessesRemaining; i++) {
        emptyGuesses.push(
            <ListItem disablePadding>
                <ListItemIcon>
                    <HelpIcon sx={{ color: "blue" }}/>
                </ListItemIcon>
                <ListItemText primary="" />
            </ListItem>                          
        );
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List dense={true}>
            {
                props.fields.guesses.map((guess) => {
                    return(
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <CancelIcon sx={{ color: "red" }}/>
                        </ListItemIcon>
                        <ListItemText primary={guess.name} />
                    </ListItem>                        
                    );
                })
            }
            {emptyGuesses}
          </List>
      </Box>
    );
}

export default PreviousGuesses;