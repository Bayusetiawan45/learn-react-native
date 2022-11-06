import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/card';
import Screen from '../components/screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Jaket',
    price: 100,
    image: require('../assets/images.jpg'),
  },
  {
    id: 2,
    title: 'Kemeja',
    price: 50,
    image: require('../assets/images.jpg'),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingScreen;
