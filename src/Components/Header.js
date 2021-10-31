import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { ReactComponent as Bldrs } from '../assets/bldrs.svg';
import { ReactComponent as Viewer } from '../assets/viewer.svg';

const useStyles = makeStyles({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    height: 90,
    '@media (max-width: 780px)': {
      margin: 0,
    },
  },
  logo: {
    width: 160,
  },
  menu: {
    height: 40,
    position: 'relative',
    left: 5,
    bottom: 5,
    '@media (max-width: 780px)': { position: 'relative', left: 22 },
  },
});

const Header = ({ onClickIcon }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolBar}>
      <Bldrs className={classes.logo} />
      <IconButton
        color='primary'
        aria-label='upload picture'
        component='span'
        onClick={onClickIcon}
      >
        <Viewer className={classes.menu} />
      </IconButton>
    </Toolbar>
  );
};

export default Header;
