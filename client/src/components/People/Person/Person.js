import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePerson } from '../../../actions/people';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const Person = ({ person, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const details = () => {
    setCurrentId(person._id);
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          person.selectedFile ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={person.first_name}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>
          {person.first_name} {person.last_name}
        </Typography>
        {/* <Typography variant='body2'>
          {moment(person.createdAt).format('D/MM/YYYY')}
        </Typography> */}
      </div>
      <div className={classes.overlay2}>
        {(user?.result?.googleId === person?.creator ||
          user?.result?._id === person?.creator) && (
          <Button
            style={{ color: 'white' }}
            size='small'
            onClick={() => setCurrentId(person._id)}
          >
            <MoreHorizIcon fontSize='default' />
          </Button>
        )}
      </div>
      {/* <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {person.name}
        </Typography>
      </div> */}
      <CardContent>
        <Typography className={classes.title} variant='h5' gutterBottom>
          Job: {person.job}
        </Typography>
        <div className={classes.details}>
          <Typography variant='subtitle1' color='textSecondary' component='h2'>
            <span className={classes.capital}>Added by: {person.name}</span>
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>
            Added at: {moment(person.createdAt).format('D/MM/YYYY')}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === person?.creator ||
          user?.result?._id === person?.creator) && (
          <Link to={`/people/${person._id}`}>
            <Button
              size='small'
              color='secondary'
              disabled={!user?.result}
              onClick={() => details(person._id)}
            >
              <DetailsIcon fontSize='small' /> Details
            </Button>
          </Link>
        )}
        {user?.result?.googleId === person?.creator ||
        user?.result?._id === person?.creator ? (
          <Button
            size='small'
            color='primary'
            onClick={() => dispatch(deletePerson(person._id))}
          >
            <DeleteIcon fontSize='small' />
            Delete
          </Button>
        ) : (
          <div></div>
        )}
      </CardActions>
    </Card>
  );
};
export default Person;
