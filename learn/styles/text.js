import React from 'react';
import { Text, View } from 'react-native';
import AppText from '../../app/components/text';

const LearnStylingText = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '600',
        color: 'salmon',
        textTransform: 'capitalize',
        textAlign: 'justify',
        lineHeight: 30
      }}>I love raect native course, this is some long text</Text>
      <AppText>This is custom text</AppText>
    </View>
  );
};

export default LearnStylingText;