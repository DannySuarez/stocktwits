import React, { useState } from 'react';
import AddSymbol from '../addsymbol/AddSymbol';
import Symbols from '../symbols/Symbols';
import Tweets from '../tweets/Tweets';
import { getStockTweets } from '../../services/stocktwitsApi';

function WatchList() {

  const [initialSearch, setSearch] = useState({
    symbol: '',
    symbols: [],
    tweets: []
  });

  const addToWatchList = (sym, arr) => {
    const lowerCaseSymbol = sym.toLowerCase();
    if(!arr.includes(lowerCaseSymbol)) arr.push(lowerCaseSymbol);
  };

  const handleChange = ({ target }) => {
    setSearch({ ...initialSearch, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { symbol, symbols } = initialSearch;
    addToWatchList(symbol, symbols);
    getStockTweets(symbol).then(tweets => {
      setSearch({ ...initialSearch, tweets:tweets });
    });
    setSearch({ ...initialSearch, symbols });
    setSearch({ ...initialSearch, symbol:'' });
  };

  return (
    <>
      <AddSymbol
        symbol={initialSearch.symbol}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <Symbols
        symbols={initialSearch.symbols}
      />

      <Tweets
        tweets={initialSearch.tweets}
      />
    </>
  );


}

export default WatchList;
