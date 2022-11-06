import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ListItem from '../components/listItem';
import AppText from '../components/text';
import colors from '../config/colors';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image source={require('../assets/images.jpg')} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>This is title</AppText>
        <AppText style={styles.price}>$273</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/images.jpg')}
            title="Bayu Setiawan"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
