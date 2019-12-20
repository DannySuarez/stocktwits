import React from 'react';
import Symbol from './Symbol';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper
  },
  parent: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

function Symbols({ symbols }) {
  const classes = useStyles();
  const symbolsList = symbols.map((symbol, i) => {
    return <Symbol symbol={symbol} key={i} />;
  });

  return (
    <>
      <List className={classes.root}>
        { symbolsList }
      </List>
    </>
  );
  
}

Symbols.propTypes = {
  symbols: PropTypes.array.isRequired
};

export default Symbols;
