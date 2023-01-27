import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from '../../app/components/screen';
import { Button, Image } from 'react-native';

const LearnImagePicker = () => {
  const [imageUri, setImageUri] = useState()

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enable permission to access');
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled)
        setImageUri(result.uri)
    } catch (error) {
      console.log('error select image')
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
    </Screen>
  );
};

export default LearnImagePicker;
