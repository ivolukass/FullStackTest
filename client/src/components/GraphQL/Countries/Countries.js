import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import CountryItem from './CountryItem';
import COUNTRIES_QUERY from '../graphQL/countries';
import { Grid, Paper } from '@material-ui/core';

export class Countries extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Paper>
            <h1 style={{ textAlign: 'center' }}>Countries</h1>
          </Paper>
        </div>

        <Query query={COUNTRIES_QUERY}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div>
                  <Paper>
                    <h4>Loading ...</h4>
                  </Paper>
                </div>
              );
            if (error) console.log(error);
            //console.log(data);

            return (
              <Grid
                style={{ display: 'flex', alignItems: 'center' }}
                container
                alignItems='stretch'
                spacing={3}
              >
                <Fragment>
                  {data.countries.map((country) => (
                    <Grid key={country.code} item xs={12} sm={6}>
                      <CountryItem key={country.code} country={country} />
                    </Grid>
                  ))}
                </Fragment>
              </Grid>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Countries;
