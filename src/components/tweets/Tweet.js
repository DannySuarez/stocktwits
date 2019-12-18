import React from 'react';
import PropTypes from 'prop-types';


function Tweet({ tweet }) {
  return (
    <li>
      {tweet.body}
    </li>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object
};

export default Tweet;
