import React, { useState } from 'react';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import { makeStyles } from '@mui/styles';
import pablo from '../assets/pablo.png';
import Bio from '../Components/Bio';

const useStyles = makeStyles({
  pageWrapper: {
    width: '100%',
    height: '700px',
    '@media (max-width: 780px)': {
      height: 870,
      overflowX: 'hidden',
      position: 'relative',
    },
  },
  mission: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 64,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    marginTop: 140,
    marginLeft: 30,
    '@media (max-width: 780px)': {
      marginTop: 50,
      marginLeft: 0,
      fontSize: 50,
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: 20,
    },
  },
  statementWrapper: {
    marginTop: 100,
    // marginLeft: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    '@media (max-width: 780px)': {
      marginLeft: 20,
      marginTop: 60,
    },
  },
  statement: {
    width: '95%',
    maxWidth: 950,
    backgroundColor: 'lightgray',
    fontSize: 24,
    color: 'black',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '20px 20px',
    letterSpacing: '1px',
    '@media (max-width: 780px)': {
      fontSize: 20,
      letterSpacing: '0px',
      padding: '20px 20px',
      width: '90%',
      maxWidth: '84%',
    },
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'grey',
    borderRadius: '50%',
  },
});

const Team = () => {
  const classes = useStyles();
  const [sideMenu, setSideMenu] = useState(false);
  const onClickIcon = () => {
    console.log('icon is clicked', sideMenu);
    setSideMenu(!sideMenu);
  };
  return (
    <div className={classes.pageWrapper}>
      <div className={classes.mission}>Team</div>
      <div
        style={{
          marginTop: 100,
          marginLeft: 40,
          width: 1000,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: '1px solid red',
        }}
      >
        <Bio
          image={pablo}
          name={'Pablo'}
          bio={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          }
        />
        <Bio
          image={pablo}
          name={'Kate'}
          bio={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          }
        />
        <Bio
          image={pablo}
          name={'Markus'}
          bio={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          }
        />
        <Bio
          image={pablo}
          name={'Oleg'}
          bio={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
          }
        />
      </div>
    </div>
  );
};

export default Team;
