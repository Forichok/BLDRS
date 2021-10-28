import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { ReactComponent as Close } from '../assets/close.svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  closeWrapper: {
    textTransform: 'uppercase',
    marginTop: 25,
    marginLeft: 25,
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 780px)': {
      position: 'relative',
      marginTop: 25,
      marginLeft: 0,
      right: '-1px',
    },
  },
  close: {
    marginTop: 0,
    marginRight: 18,
    height: 60,
    width: 50,
    zIndex: 1000,
    cursor: 'pointer',
  },
  singin: {
    fontSize: 60,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: '30px 30px 28px 50px',
    cursor: 'pointer',
    '@media (max-width: 780px)': {
      fontSize: 50,
      margin: '50px 10px 28px 40px',
    },
  },
  buildSpace: {
    fontSize: 60,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: '5px 40px 30px 50px',
    textDecoration: 'underline',
    cursor: 'pointer',
    '@media (max-width: 780px)': { fontSize: 50, margin: '0px 20px 28px 40px' },
  },
  contactus: {
    fontSize: 60,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: '290px 30px 30px 50px',
    cursor: 'pointer',
    '@media (max-width: 780px)': {
      fontSize: 50,
      margin: '210px 10px 28px 40px',
    },
  },
});

export default function SideMenu({ open, onClose }) {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment key={'right'}>
        <Drawer anchor={'right'} open={open}>
          <div className={classes.closeWrapper} onClick={() => onClose()}>
            <Close className={classes.close} />
          </div>
          <div className={classes.singin}>sign IN</div>
          <div className={classes.buildSpace}>build.space</div>
          <div className={classes.contactus}>contact us</div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
