import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/listItem';
import ListItemDeleteAction from '../components/listItemDeleteAction';
import ListItemSeparator from '../components/listItemSeparator';
import Screen from '../components/screen';

const initialMessages = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    image: require('../assets/images.jpg'),
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    image: require('../assets/images.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    const newMessages = messages.filter(m => m.id !== message.id)
    setMessages(newMessages)
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'Title 2',
              description: 'Description 2',
              image: require('../assets/images.jpg'),
            },
          ])
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
