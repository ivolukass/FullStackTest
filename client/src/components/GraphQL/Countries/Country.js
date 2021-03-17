import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import COUNTRY_QUERY from '../graphQL/country';
import { Paper, Button } from '@material-ui/core';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
});

export class Country extends Component {
  render() {
    let { code } = this.props.match.params;
    return (
      <ApolloProvider client={client}>
        <Paper
          style={{
            width: '50%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Fragment>
            <Query query={COUNTRY_QUERY} variables={{ code }}>
              {({ loading, error, data }) => {
                if (loading) return <h4>Loading ...</h4>;
                if (error) console.log(error);
                //console.log(data);

                const {
                  code,
                  name,
                  native,
                  phone,
                  capital,
                  currency,
                } = data.country;

                return (
                  <div>
                    <h1 style={{ textAlign: 'center', fontSize: '40px' }}>
                      Country name: {name}
                    </h1>
                    <h3 style={{ fontSize: '28px', paddingLeft: '10px' }}>
                      Country details:
                    </h3>
                    <ul style={{ fontSize: '24px' }}>
                      <li>Code: {code}</li>
                      <li>Native: {native}</li>
                      <li>Phone: {phone}</li>
                      <li>Capital: {capital}</li>
                      <li>Currency: {currency}</li>
                    </ul>
                    <p />
                    <Button
                      size='small'
                      color='secondary'
                      style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    >
                      <>
                        <Link to='/countries'>Back</Link>
                      </>
                    </Button>
                  </div>
                );
              }}
            </Query>
          </Fragment>
        </Paper>
      </ApolloProvider>
    );
  }
}

export default Country;
