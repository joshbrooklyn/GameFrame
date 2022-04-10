import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export default function ToastError(props) {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={props.onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{vertical:'top', horizontal:'center'}}
      action={action}
      autoHideDuration={props.autoHideDuration}
      onClose={props.onClose}
      open={props.isOpen}
    >
      <Alert onClose={props.onClose} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}

ToastError.defaultProps = {
  autoHideDuration: 10000,
  severity: "success",
};
