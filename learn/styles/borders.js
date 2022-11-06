import React from 'react';
import { View } from 'react-native';

const LearnBorders = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'royalblue',
        borderRadius: 10,
      }}></View>
    </View>
  );
};

export default LearnBorders;