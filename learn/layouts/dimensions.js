import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform, View, Dimensions } from 'react-native';

export const LearnDimensions = () => {
  console.log(Dimensions.get('screen'))
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.video}>

    </View>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  video: {
    backgroundColor: 'dodgerblue',
    width: '50%',
    height: 70
  }
});