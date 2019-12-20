import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Search from './containers/Search';
import WatchList from './containers/WatchList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/watchlist" component={WatchList} />
      </Switch>
    </Router>
  );

  
}  
