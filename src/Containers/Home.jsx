import React, { useState } from 'react';
import Header from '../Components/Header';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  pageWrapper: {
    height: '800px',
    '@media (max-width: 780px)': {
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'hidden',
      position: 'relative',
    },
  },
  mission: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 64,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '-1px',
    marginTop: 60,
    paddingLeft: 30,
    color: 'black',
    '@media (max-width: 780px)': {
      marginTop: 50,
      marginLeft: 0,
      fontSize: 50,
      display: 'flex',
      justifyContent: 'center',
    },
  },
  statementWrapper: {
    marginTop: 80,
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 780px)': {
      marginLeft: 0,
      marginTop: 60,
    },
  },
  statement: {
    width: '95%',
    maxWidth: 950,
    backgroundColor: 'black',
    fontSize: 24,
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '20px 20px',
    letterSpacing: '1px',
    '@media (max-width: 780px)': {
      fontSize: 20,
      letterSpacing: '0px',
      padding: '20px 10px',
      width: '90%',
      maxWidth: '84%',
    },
  },
  bullet: {
    marginTop: 0,
    marginBottom: 0,
    '@media (max-width: 780px)': {
      marginTop: 0,
      marginBottom: 0,
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

      <div className={classes.mission}>build everything together</div>

      <div className={classes.statementWrapper}>
        <div className={classes.statement}>
          <div className={classes.bullet}>How will we build in the future?</div>
          <div className={classes.bullet}>
            {' '}
            HOw do we reimagine the full lifecycle of projects?
          </div>

          <div className={classes.bullet}>
            How do we connect users and inhabitants to designers and builders?
          </div>
          <div className={classes.bullet}>
            How do we reassociate life cycle stakeholders?
          </div>
          <div className={classes.bullet}>
            What technology exist in the intersection of open society,
            artificial intellegence and computer assisted design?
          </div>
          <div className={classes.bullet}>
            What is the integration of the places we live in and the products we
            use?
          </div>
          <div className={classes.bullet}>
            People who answer these questions will build the future{' '}
            <span style={{ cursor: 'pointer' }}>🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
