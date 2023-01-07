
import reportWebVitals from './reportWebVitals';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
//import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
 import { setContext } from 'apollo-link-context'
 import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
 import { onError } from "apollo-link-error";
 const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
    const token = ''//localStorage.getItem(AUTH_TOKEN);
    return {
        headers: {
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
            "Access-Control-Allow-Credentials" : true,
            'Access-Control-Allow-Origin': "http://localhost:3000/",
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});
const linkError = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );

    if (networkError) console.log(`[Network error]: ${networkError}`);
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),linkError,
        fetchOptions: {
          mode: 'cors',
        },
    });


// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
