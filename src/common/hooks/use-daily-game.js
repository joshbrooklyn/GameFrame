import React from "react";
import request from "../data/request";
import noop from "../utilities/noop";
import { config } from "../../config";

export default function useDailyGame(handleError = noop) {
  const [dailyGame, setDailyGame] = React.useState(null);

  const fetchDailyGame = React.useCallback(() => {
    return request(config.DAILY_GAME_ENDPOINT).then(setDailyGame).catch((error) => {
      const newMsg = "Error fetching daily game: " + error.message;  
      console.log(newMsg);
      handleError(new Error(newMsg, { cause: error}));
    })
  }, [handleError, setDailyGame]);

  React.useEffect(() => {
    fetchDailyGame();
  }, [fetchDailyGame]);

  return {
    fetchDailyGame,
    dailyGame
  };
}