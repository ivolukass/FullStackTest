import gql from "graphql-tag";

const COUNTRY_QUERY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      code
      name
      native
      phone
      capital
      currency
    }
  }
`;

export default COUNTRY_QUERY;
