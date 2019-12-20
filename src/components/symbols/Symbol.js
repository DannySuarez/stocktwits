import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Divider, ListItemText, Typography } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';

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

function Symbol({ symbol }) {
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
                 
              ${symbol.toUpperCase()}
                <RemoveIcon />
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li"/>
    </>
  );
}

Symbol.propTypes = {
  symbol: PropTypes.string
};

export default Symbol;
