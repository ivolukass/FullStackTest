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
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePerson } from '../../../../actions/people';
import useStyles from './styles';

const Details = ({ personDetails, setCurrentId, setIsEditing }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const edit = () => {
    setIsEditing(true);
    setCurrentId(personDetails._id);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={personDetails.first_name}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>
          {personDetails.first_name} {personDetails.last_name}
        </Typography>
        {/* <Typography variant='body2'>
          {moment(person.createdAt).format('D/MM/YYYY')}
        </Typography> */}
      </div>
      <div className={classes.overlay2}>
        {(user?.result?.googleId === personDetails?.creator ||
          user?.result?._id === personDetails?.creator) && (
          <Button
            style={{ color: 'white' }}
            size='small'
            onClick={() => edit(personDetails._id)}
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
          Job: {personDetails.job}
        </Typography>
        <div className={classes.details}>
          <Typography variant='subtitle1' color='textSecondary' component='h2'>
            <span className={classes.capital}>
              Added by: {personDetails.name}
            </span>
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>
            Added at: {moment(personDetails.createdAt).format('D/MM/YYYY')}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === personDetails?.creator ||
          user?.result?._id === personDetails?.creator) && (
          <Link to={'/'}>
            <Button size='small' color='secondary'>
              <DetailsIcon fontSize='small' /> Back Home
            </Button>
          </Link>
        )}
        {(user?.result?.googleId === personDetails?.creator ||
          user?.result?._id === personDetails?.creator) && (
          <Button
            size='small'
            color='primary'
            onClick={() => dispatch(deletePerson(personDetails._id))}
          >
            <DeleteIcon fontSize='small' />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Details;
