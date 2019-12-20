import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { List } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper
  },
 
}));

function Tweets({ tweets }) {
  const classes = useStyles();

  const tweetsList = tweets.map(tweet => {
    return <Tweet tweet={tweet} key={tweet.id} />;
  });

  return (
    <>
      <List className={classes.root}>
        { tweetsList }
      </List>
    </>
  );
  
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
