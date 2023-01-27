import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../screens/listingScreen';
import ListingDetailsScreen from '../screens/listingDetailsScreen';

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{
    presentation: 'modal',
    headerShown: false
  }}>
    <Stack.Screen name='Listings' component={ListingScreen} />
    <Stack.Screen name='ListingDetails' component={ListingDetailsScreen} options={{
      headerShown: false
    }} />
  </Stack.Navigator>
)

export default FeedNavigator