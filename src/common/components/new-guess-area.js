import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function NewGuessArea(props) {
    function handleSubmitGuess() {
        let viewableScreenshots = props.fields.viewableScreenshots + 1;
        props.setField("viewableScreenshots", viewableScreenshots);
    }

    return (
      <Stack direction="row" spacing={2}>
        <Autocomplete
        disablePortal
        id="game-list"
        options={
            props.gameList.map((game) => {
                return(
                    {
                        label: game.gameName,
                        id: game.gameId
                    }  
                );
            })
        }
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="" />}
        onChange={(event, newValue) => props.setField("selectedGame", {name: newValue.label, id:newValue.id})}
        />
        <Button variant="outlined" onClick={() => {props.submitGuess()}}>Submit</Button>
      </Stack>
    );
}

export default NewGuessArea;