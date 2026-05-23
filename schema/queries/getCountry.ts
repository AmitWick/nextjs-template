import { graphql } from "@/graphql/gql";

const GetCountry = graphql(`
  query GetCountry($code: ID!) {
    country(code: $code) {
      awsRegion
      native
      phone
      phones
      states {
        code
        name
      }
      languages {
        code
        name
        native
      }
    }
  }
`);

export default GetCountry;
