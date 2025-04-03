import { GraphQLClient } from 'graphql-request';

const endpoint = '/graphql';

export const graphqlClient = new GraphQLClient(endpoint, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const LOGIN_MUTATION = `
  mutation Login($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      refreshToken
      user {
        id
        email
      }
      errors {
        field
        message
        code
      }
    }
  }
`; 