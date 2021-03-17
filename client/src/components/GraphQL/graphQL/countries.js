import gql from "graphql-tag";

const COUNTRIES_QUERY = gql`
  query CountriesQuery {
    countries {
      name
      code
    }
  }
`;

export default COUNTRIES_QUERY;
