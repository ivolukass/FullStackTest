import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Person from './Person/Person';
import useStyles from './styles';

const People = ({ setCurrentId }) => {
  const people = useSelector((state) => state.people);
  const classes = useStyles();
  console.log(people);
  return !people.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {people.map((person) => (
        <Grid key={person._id} item xs={12} sm={6}>
          <Person person={person} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default People;
