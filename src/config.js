const dev = {
    "DAILY_GAME_ENDPOINT": "https://jh-desktop:5001/CurrentGame",
    "WORDLIST_ENDPOINT": "https://jh-desktop:5001/Games"
  }
  
  const prod = {
    "DAILY_GAME_ENDPOINT": "https://gamedle.joshhowe.com/api/CurrentGame",
    "WORDLIST_ENDPOINT": "https://gamedle.joshhowe.com/api/GameList"
  }
  
  //export const config = dev;

  export const config = process.env.NODE_ENV === 'development'
    ? dev
    : prod;