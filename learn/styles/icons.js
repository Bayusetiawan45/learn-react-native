import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

// expo.github.io/vector-icons

const LearnIcons = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name='email' size={30} color="dodgerblue" />
    </View>
  );
};

export default LearnIcons;
