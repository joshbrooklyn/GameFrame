import React from "react";
import request from "../data/request";
import noop from "../utilities/noop";
import { config } from "../../config";

export default function useGamelist(handleError = noop) {
  const [gameList, setGamelist] = React.useState([]);

  const fetchGameList = React.useCallback(() => {
    return request(config.WORDLIST_ENDPOINT).then(setGamelist).catch((error) => {
      const newMsg = "Error fetching word list list: " + error.message;  
      console.log(newMsg);
      handleError(new Error(newMsg, { cause: error}));
    })
  }, [handleError, setGamelist]);

  React.useEffect(() => {
    fetchGameList();
  }, [fetchGameList]);

  return {
    fetchGameList,
    gameList
  };
}