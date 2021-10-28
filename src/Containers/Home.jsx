import React, { useState } from 'react';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  pageWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    '@media (max-width: 780px)': {
      height: 870,
      overflowX: 'hidden',
      position: 'relative',
    },
  },
  mission: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 64,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    marginTop: 70,
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
    marginLeft: 30,
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
    backgroundColor: 'black',
    fontSize: 30,
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '20px 20px',
    letterSpacing: '2px',
    '@media (max-width: 780px)': {
      fontSize: 20,
      letterSpacing: '0px',
      padding: '20px 20px',
      width: '90%',
      maxWidth: '84%',
    },
  },
});

const Home = () => {
  const classes = useStyles();
  const [sideMenu, setSideMenu] = useState(false);
  const onClickIcon = () => {
    console.log('icon is clicked', sideMenu);
    setSideMenu(!sideMenu);
  };
  return (
    <div className={classes.pageWrapper}>
      <Header onClickIcon={onClickIcon} />
      <SideMenu open={sideMenu} onClose={() => setSideMenu(false)} />
      <div className={classes.mission}>build everything together</div>

      <div className={classes.statementWrapper}>
        <div className={classes.statement}>
          We are building towards a WORLD where DESIGNERS ENGINEERS AND BUILDERS
          COLLABORATE IN A SINGLE DIGITAL WORKSPACE, where YOU CAN EXPRESS THE
          INTENT ABOUT YOUR DESIGN AND GET AN ACCURATE ANSWER FROM THE BEST
          EXPERTISE. <br />
          WE want to BUILT TOGETHER - TRULLY TOGETHER WITH NO ARTIFICIAL
          BOUNDARIES BETWEEN DISCIPLINES.
        </div>
      </div>
    </div>
  );
};

export default Home;
