export const getStockTweets = symbol => {
  return fetch(`https://stocktwitsapi.herokuapp.com/api/v1/tweets/${symbol}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      if(!res.ok) throw 'unable to fetch route';
      return res.json();
    });
};
