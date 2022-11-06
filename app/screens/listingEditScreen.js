import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/categoryPickerItem';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/formPicker';
import Screen from '../components/screen';

const ListingEditScreen = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
  });

  const categories = [
    { label: 'Furniture', value: 1, backgroundColor: 'salmon', icon: 'apps' },
    { label: 'Clothing', value: 2,  backgroundColor: 'gold', icon: 'email' },
    { label: 'Cameras', value: 3,  backgroundColor: 'dodgerblue', icon: 'lock' },
    { label: 'Games', value: 4, backgroundColor: 'tomato', icon: 'menu' },
    { label: 'Sports', value: 5,  backgroundColor: 'red', icon: 'delete' },
    { label: 'Movie & Music', value: 6,  backgroundColor: 'gray', icon: 'lock' },
  ];

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={255}
          name="price"
          placeholder="Price"
          width={150}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
