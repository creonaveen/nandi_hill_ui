import { GraphQLClient } from 'graphql-request';

const endpoint = '/graphql';

export const graphqlClient = new GraphQLClient(endpoint, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  requestMiddleware: (request) => {
    console.log('GraphQL Request:', {
      query: request.query,
      variables: request.variables,
      headers: request.headers,
    });
    return request;
  },
  responseMiddleware: (response) => {
    console.log('GraphQL Response:', response);
    return response;
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