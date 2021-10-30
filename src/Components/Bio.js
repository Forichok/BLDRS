import React from 'react';
import { makeStyles } from '@mui/styles';

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

const Bio = ({ name, bio, image }) => {
  const classes = useStyles();
  return (
    <div>
      <img src={image} className={classes.image} />
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid red',
        }}
      >
        {name}
      </div>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          width: 200,
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid red',
        }}
      >
        {bio}
      </div>
    </div>
  );
};

export default Bio;
