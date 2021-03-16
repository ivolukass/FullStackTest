import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPerson, updatePerson } from '../../actions/people';

const Form = ({ currentId, setCurrentId }) => {
  const [personData, setPersonData] = useState({
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
    if (person) setPersonData(person);
  }, [person]);

  const clear = () => {
    setCurrentId(0);
    setPersonData({
      // creator: '',
      first_name: '',
      last_name: '',
      job: '',
      selectedFile: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPerson({ ...personData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(
        updatePerson(currentId, { ...personData, name: user?.result?.name })
      );
      clear();
    }
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
              ? `Editing "${personData.first_name.charAt(0)}.${
                  personData.last_name
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
            value={personData.first_name}
            onChange={(e) =>
              setPersonData({ ...personData, first_name: e.target.value })
            }
          />
          <TextField
            name='last_name'
            variant='outlined'
            label='Last Name'
            fullWidth
            value={personData.last_name}
            onChange={(e) =>
              setPersonData({ ...personData, last_name: e.target.value })
            }
          />
          <TextField
            name='job'
            variant='outlined'
            label='Job'
            fullWidth
            value={personData.job}
            onChange={(e) =>
              setPersonData({ ...personData, job: e.target.value })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) =>
                setPersonData({ ...personData, selectedFile: base64 })
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
