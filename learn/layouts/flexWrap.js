import React from 'react';
import { View } from 'react-native';

export const LearnFlexWrap = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row', // horizontal
        justifyContent: 'center', // main
        alignItems: 'center', // secondary - centered of each item
        flexWrap: 'wrap',
        alignContent: 'center' // centered of the content
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'gray',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
};
