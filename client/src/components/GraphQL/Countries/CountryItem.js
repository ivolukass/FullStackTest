import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

//Display country list
export default function CountryItem({ country: { code, name } }) {
  //console.log(props.country);
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      }}
    >
      <CardContent>
        <Typography style={{ padding: '0 16px' }} variant='h5' gutterBottom>
          Code: {code}
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '5px',
          }}
        >
          <Typography variant='subtitle1' color='textSecondary' component='h2'>
            Name: {name}
          </Typography>
        </div>
      </CardContent>

      <CardActions
        style={{
          padding: '0 16px 8px 16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button size='small' color='secondary'>
          <>
            <Link to={`/countries/${code}`}>Details</Link>
          </>
        </Button>
      </CardActions>
    </Card>
  );
}
