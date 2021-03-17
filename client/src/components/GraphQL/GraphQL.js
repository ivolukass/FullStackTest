import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Countries from './Countries/Countries';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
});

class GraphQL extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Countries />
      </ApolloProvider>
    );
  }
}

export default GraphQL;
