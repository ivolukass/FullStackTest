import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPerson } from '../../../../actions/people';
import useStyles from '../../styles';

import Details from './Details';
import FormDetails from '../../../Form/FormDetails';

const DetailsMain = () => {
  const [currentId, setCurrentId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [personDetails, setPersonDetails] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const details = useSelector((state) =>
    id ? state.people.find((p) => p._id === id) : null
  );

  // console.log(isEditing);

  useEffect(() => {
    dispatch(getPerson(id));
    if (details) {
      setPersonDetails(details);
    }
    console.log(personDetails);
  }, [currentId, dispatch, personDetails, isEditing]);
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid key={personDetails._id} item xs={12} sm={7}>
            <Details
              setCurrentId={setCurrentId}
              personDetails={personDetails}
              setIsEditing={setIsEditing}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            {isEditing ? (
              <FormDetails
                currentId={currentId}
                setCurrentId={setCurrentId}
                setIsEditing={setIsEditing}
                isEditing={isEditing}
              />
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default DetailsMain;
