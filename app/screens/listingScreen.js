import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import routes from '../navigation/routes';

import Card from '../components/card';
import Screen from '../components/screen';
import colors from '../config/colors';


const listings = [
  {
    id: 1,
    title: 'Sneakers',
    price: 100,
    image: require('../assets/sneakers.jpg'),
  },
  {
    id: 2,
    title: 'Tsirt',
    price: 50,
    image: require('../assets/tsirt.jpg'),
  },
  {
    id: 3,
    title: 'Other Product',
    price: 640,
    image: require('../assets/images.jpg'),
  },
];

const ListingScreen = ({ navigation }) => {
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
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
