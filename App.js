import React, { useState } from 'react';
import AppTextInput from './app/components/input';
import AppPicker from './app/components/picker';
import Screen from './app/components/screen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

const App = () => {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
      <AppPicker
        placeholder="Category"
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
    </Screen>
  );
};

export default App;
