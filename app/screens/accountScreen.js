import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/icon';
import ListItem from '../components/lists/listItem';
import ListItemSeparator from '../components/lists/listItemSeparator';
import Screen from '../components/screen';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Listing',
    icon: {
      name: 'format-list-bulleted',
      backroundColor: colors.primary,
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backroundColor: colors.secondary,
    },
    targetScreen: 'Messages'
  },
];
const AccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Bayu"
          subTitle="bayusetiawanipb@gmail.com"
          image={require('../assets/images.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
