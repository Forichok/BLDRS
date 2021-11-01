import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 780px)': {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'center',
      marginBottom: 20,
    },
  },

  image: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: '50%',
    '@media (max-width: 780px)': {
      width: 100,
      height: 100,
    },
  },
  name: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'black',
  },
  bio: {
    marginTop: 20,
    display: 'flex',
    width: 180,
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    background: 'black',
    color: 'white',
    padding: '10px 0px 12px 12px',
    '@media (max-width: 780px)': {
      fontSize: 12,
      marginTop: 0,
      width: 180,
      height: 120,
      padding: '10px 4px 4px 12px',
    },
  },
});

const Bio = ({ name, bio, image }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src={image} className={classes.image} />
        <div className={classes.name}>{name}</div>
      </div>

      <div className={classes.bio}>{bio}</div>
    </div>
  );
};

export default Bio;
