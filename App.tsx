import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './src/lib/apollo';
import { AuthProvider } from './src/contexts/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import Navigator from './src/navigation/RootNavigator';
import FlashMessage from 'react-native-flash-message';
import LoadingModal from './src/components/LoadingModal';
import { GlobalLoadingProvider } from './src/contexts/GlobalLoadingContext';
import { MessageProvider } from './src/contexts/MessageContext';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ApolloProvider client={apolloClient}>
        <GlobalLoadingProvider>
          <MessageProvider>
            <AuthProvider>
              <NavigationContainer ref={Navigator.navigationRef}>
                <AppNavigator />
                <LoadingModal />
                <FlashMessage position="top" style={{ paddingTop: 70 }} />
              </NavigationContainer>
            </AuthProvider>
          </MessageProvider>
        </GlobalLoadingProvider>
      </ApolloProvider>
    </>
  );
}
