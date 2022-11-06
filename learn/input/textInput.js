import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const LearnTextInput = () => {
  const [firstname, setFirstName] = useState('')
  return (
    <View>
      <Text>{firstname}</Text>
      <TextInput
      placeholder="First Name"
      onChangeText={text => setFirstName(text)}
      style={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      }}
      // maxLength={5}
      // keyboardType="numeric"
      // clearButtonMode='always'
      // secureTextEntry
    />
    </View>
  );
};

export default LearnTextInput;
