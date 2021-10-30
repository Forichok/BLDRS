import React, { useState } from 'react';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  pageWrapper: {
    // width: '100%',
    height: '700px',
    border: '1px solid red',
    '@media (max-width: 780px)': {
      height: 870,
      overflowX: 'hidden',
      overflowY: 'hidden',
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
    marginTop: 70,
    // marginLeft: 30,
    paddingLeft: 30,
    '@media (max-width: 780px)': {
      marginTop: 50,
      marginLeft: 0,
      fontSize: 50,
      display: 'flex',
      justifyContent: 'center',
      // paddingLeft: 20,
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
          How will we build things in the future? HOw do we reimagine the full
          lifecycle of projects? How do we connect users and inhabitants 🏠 to
          designers and builders? How do we re - associate life cycle
          stakeholders?
          <br />
          What technology exist in the intersection of open society, artificial
          intellegence and computer assisted deisgn?
          <br />
          What is the integration of the places we live in and the products we
          use?
          <br />
          People who answer these questions will build the future.
        </div>
        {/* <div className={classes.statement}>
          We are building towards a WORLD where DESIGNERS ENGINEERS AND BUILDERS
          COLLABORATE IN A SINGLE DIGITAL WORKSPACE, where YOU CAN EIn the places we
          live in and the products we useXPRESS THE
          INTENT and get it done. <br />
          WE are enabling the process of building together - TRULLY TOGETHER
          WITH NO ARTIFICIAL BOUNDARIES.
        </div> */}
      </div>
    </div>
  );
};

export default Home;
