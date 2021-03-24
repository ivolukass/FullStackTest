import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { updatePerson } from '../../actions/people';

const Form = ({ currentId, setCurrentId, setIsEditing, isEditing }) => {
  const [personDetails, setPersonDetails] = useState({
    // creator: '',
    first_name: '',
    last_name: '',
    job: '',
    selectedFile: '',
  });

  const person = useSelector((state) =>
    currentId ? state.people.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (person) setPersonDetails(person);
  }, [person, isEditing, dispatch, currentId]);

  const clear = () => {
    setCurrentId(0);
    setIsEditing(false);
    setPersonDetails({
      // creator: '',
      first_name: '',
      last_name: '',
      job: '',
      selectedFile: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updatePerson(currentId, { ...personDetails, name: user?.result?.name })
    );
    clear();
    setCurrentId(0);
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center'>
          Please Sign In to add/edit/delete people
        </Typography>
      </Paper>
    );
  } else {
    return (
      <Paper className={classes.paper}>
        <form
          autoComplete='off'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant='h6'>
            {currentId
              ? `Editing "${personDetails.first_name.charAt(0)}.${
                  personDetails.last_name
                }" data`
              : 'Add new person'}
          </Typography>
          {/* <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={personData.creator}
          onChange={(e) =>
            setPersonData({ ...personData, creator: e.target.value })
          }
        /> */}
          <TextField
            name='first_name'
            variant='outlined'
            label='First Name'
            fullWidth
            value={personDetails.first_name}
            onChange={(e) =>
              setPersonDetails({ ...personDetails, first_name: e.target.value })
            }
          />
          <TextField
            name='last_name'
            variant='outlined'
            label='Last Name'
            fullWidth
            value={personDetails.last_name}
            onChange={(e) =>
              setPersonDetails({ ...personDetails, last_name: e.target.value })
            }
          />
          <TextField
            name='job'
            variant='outlined'
            label='Job'
            fullWidth
            value={personDetails.job}
            onChange={(e) =>
              setPersonDetails({ ...personDetails, job: e.target.value })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) =>
                setPersonDetails({ ...personDetails, selectedFile: base64 })
              }
            />
          </div>

          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Submit
          </Button>

          <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    );
  }
};
export default Form;
