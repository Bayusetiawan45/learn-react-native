import React from 'react';
import { View } from 'react-native';

export const LearnFlexGrow = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row', // horizontal
        justifyContent: 'center', // main
        alignItems: 'center' // secondary
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flexBasis: 100, // width or hight depends by directions
          // flexGrow: 1,
          // flexShrink: 1,
          // width: 100,
          height: 100,
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
    </View>
  );
};
