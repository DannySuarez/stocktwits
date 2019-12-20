import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Divider, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}));

function Tweet({ tweet }) {
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {tweet.user.name} 
              </Typography>
              -- {tweet.body}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li"/>
    </>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object
};

export default Tweet;
