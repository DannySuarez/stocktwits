import React, { useState } from 'react';
import { getStockTweets } from '../../services/stocktwitsApi';
import SearchTweet from '../searchtweet/SearchTweet';
import Tweets from '../tweets/tweets';

function Home() {
  
  const [initialInput, setInput] = useState({
    symbol:'',
    tweets: []
  });

  const handleChange = ({ target }) => {
    setInput({ ...initialInput, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { symbol } = initialInput;
    getStockTweets(symbol).then(tweets => {
      setInput({ ...initialInput, tweets });
    });
    setInput({ ...initialInput, symbol:'' });
  };

  return (
    <>
      <SearchTweet
        symbol={initialInput.symbol}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <Tweets
        tweets={initialInput.tweets}
      />
    </>
  );
}
 
export default Home;
