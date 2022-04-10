import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ToastGameComplete(props) {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={props.onClose}
      label="close"
    >
      <CloseIcon fontSize="medium" />
      <div>Close</div>
    </IconButton>
  );

  const handleShare = () => {
    const rowDataStates = props.gameResult.rowDataStates;
    const guesses = props.gameResult.guesses;
    console.log(guesses);
    let shareText = "Joshdle\n\n";

    for (let i = 0; i < guesses; i++){
      const thisRow = rowDataStates[i];

      for (let j = 0; j < 5; j++) {
        if (thisRow[j] === "correct")
          shareText += '🟩';
        else if(thisRow[j] === "present")
          shareText += '🟨';
        else if (thisRow[j] === "absent")
          shareText += '⬜';
      }

      shareText += '\n';
    }

    const shareData = {
      text: shareText,
      title: "Joshdle"
    };

    if (navigator.canShare) {
      navigator
      .share(shareData)
      .then(() => {
        console.log('Successfully shared');
      })
      .catch(error => {
        console.error('Something went wrong sharing results', error);
        props.setError(new Error('Something went wrong sharing results: ' + error));
      });
    } else {
      props.setError(new Error('Sharing not supported'));
    }              

/*    html2canvas(document.body).then(function(canvas) {
      canvas.toBlob(blob => {
        console.log(blob);
        const file = new File([blob], 'htmldiv.png', { type: blob.type });
        const files = [file];
        const text = '';
        
        const shareData = {
          text: text
        };

        console.log("testing shareability...");
        if (navigator.canShare) {
          navigator
          .share(shareData)
          .then(() => {
            console.log('Successfully shared');
          })
          .catch(error => {
            console.error('Something went wrong sharing results', error);
            props.setError(new Error('Something went wrong sharing results: ' + error));
          });
        } else {
          props.setError(new Error('Sharing not supported'));
        }          
      });
    });*/
  }; 

  if (props.gameResult) {
    const gameResult = props.gameResult;

    let msg = "";
    
    if (gameResult.guesses === 0) {
      msg = "Better Luck Next Time!";
    } else {
      msg = "You guessed the word!";
    }

    const card = (
        <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 20, fontWeight:"bold" }} color="text.secondary" gutterBottom>
            {msg}
            </Typography>
            <div><Button variant="contained" color="success" onClick={handleShare}>SHARE</Button></div>
        </CardContent>
        <CardActions>            
            {action}
        </CardActions>
        </React.Fragment>
    );

    return (
        <Snackbar
          anchorOrigin={{vertical:'top', horizontal:'center'}}
          action={action}
          autoHideDuration={props.autoHideDuration}
          onClose={props.onClose}
          open={props.isOpen}
        >
        <Box sx={{ minWidth: 300 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
        </Snackbar>
      );    
  } else {
      return (
          <div/>
      );
  }
}

ToastGameComplete.defaultProps = {
  autoHideDuration: 60000,
  severity: "success",
};
