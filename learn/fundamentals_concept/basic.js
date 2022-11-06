import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar
} from 'react-native';

export default function Basic() {
  const handlePress = () => console.log('Text Pressed');
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Touched')}>
        <Image source={require('../../assets/favicon.png')} />
      </TouchableOpacity>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello Bayu ini adalah text yang panjang banget sampe aku capek ngetiknya
      </Text>
      <Button
        title="Click Me"
        color="salmon"
        onPress={() => alert('Clicked')}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
