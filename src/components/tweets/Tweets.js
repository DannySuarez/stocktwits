import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';

function Tweets({ tweets }) {
  const tweetsList = tweets.map(tweet => {
    return <Tweet tweet={tweet} key={tweet.id} />;
  });

  return (
    <>
      { tweetsList }
    </>
  );
  
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
