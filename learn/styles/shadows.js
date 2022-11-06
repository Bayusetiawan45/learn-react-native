import React from 'react';
import { View } from 'react-native';

const LearnShadows = () => {
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
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 20 // for android
      }}></View>
    </View>
  );
};

export default LearnShadows;