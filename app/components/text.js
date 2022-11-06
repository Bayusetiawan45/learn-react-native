import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles'

const AppText = ({children, style, ...otheProps}) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otheProps}>{children}</Text>
  );
};

export default AppText;