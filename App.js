import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/appNavigation';

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
