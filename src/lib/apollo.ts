// src/libs/apollo.ts
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../services/authService';

const httpLink = createHttpLink({
  uri: 'https://api.storepay.global/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('storepay_token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// ✅ 401 алдаа хариу ирвэл токен устгах
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (
    networkError &&
    'statusCode' in networkError &&
    networkError.statusCode === 401
  ) {
    console.warn('[Apollo] 401: Токеныг устгаж байна...');
    logout()
  }

  if (graphQLErrors) {
    graphQLErrors.forEach(err => {
      console.warn(`[GraphQL error]: ${err.message}`);
    });
  }
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
