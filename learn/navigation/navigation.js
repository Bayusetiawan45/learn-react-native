import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../../app/components/screen';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate('TweetsDetails')}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    {/* <Link /> */}
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate('TweetsDetails', { id: 1 })}
    />
  </Screen>
);

const TweetsDetails = ({ route }) => (
  <Screen>
    <Text>TweetsDetails {route.params.id}</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: 'salmon',
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: '#eee',
      tabBarInactiveTintColor: 'black',
      headerShown: false
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const FeedNavigator = () => (
  <Stack.Navigator
    // screenOptions={{
    //   headerStyle: { backgroundColor: 'dodgerblue' },
    //   headerTintColor: 'white',
    // }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetsDetails"
      component={TweetsDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const LearnNavigation = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default LearnNavigation;
