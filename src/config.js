const dev = {
    "DAILY_GAME_ENDPOINT": "https://localhost:5001/CurrentGame",
    "WORDLIST_ENDPOINT": "https://localhost:5001/Games"
  }
  
  const prod = {
    "DAILY_GAME_ENDPOINT": "https://gameframe.joshhowe.com/api/CurrentGame",
    "WORDLIST_ENDPOINT": "https://gameframe.joshhowe.com/api/Games"
  }
  
  //export const config = dev;

  export const config = process.env.NODE_ENV === 'development'
    ? dev
    : prod;