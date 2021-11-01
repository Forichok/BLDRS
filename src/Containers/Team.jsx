import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import pablo from '../assets/pablo.png';
import placeholder from '../assets/person.png';

import Bio from '../Components/Bio';

const useStyles = makeStyles({
  pageContainer: {
    width: '100%',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: '100px',
    '@media (max-width: 780px)': {
      // height: 900,
      height: '100%',
      overflowX: 'hidden',
      position: 'relative',
      border: '1px solid blue',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 48,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    marginTop: 140,
    marginLeft: 200,
    color: 'black',
    '@media (max-width: 780px)': {
      marginTop: 0,
      marginLeft: 0,
      fontSize: 50,
      display: 'flex',
      justifyContent: 'flex-start',
      paddingLeft: 20,
      color: 'lightgray',
    },
  },
  bioWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bioContainer: {
    marginTop: 100,
    width: 1000,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media (max-width: 780px)': {
      marginTop: 40,
      width: '100%',
      border: '1px solid blue',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  link: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 48,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    letterSpacing: '-1px',
    marginTop: 50,
    marginBottom: 60,
    color: 'grey',
    textDecoration: 'underline',
    cursor: 'pointer',
    '@media (max-width: 780px)': {
      // marginTop: 20,
      fontSize: 32,
      justifyContent: 'center',
      marginLeft: 0,
      // marginBottom: 10,
    },
  },
});

const Team = () => {
  const classes = useStyles();
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div className={classes.pageContainer}>
      {/* <div className={classes.title}>Team</div> */}
      <div className={classes.bioWrapper}>
        <div className={classes.bioContainer}>
          <Bio
            image={pablo}
            name={'Pablo'}
            bio={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
            }
          />
          <Bio
            image={placeholder}
            name={'Kate'}
            bio={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
            }
          />
          <Bio
            image={placeholder}
            name={'Markus'}
            bio={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
            }
            ß
          />
          <Bio
            image={placeholder}
            name={'Oleg'}
            bio={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
            }
          />
        </div>
      </div>
      <div className={classes.link}>hello@bldrs.com</div>
    </div>
  );
};

export default Team;
