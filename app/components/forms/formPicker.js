import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../picker';
import ErrorMessages from './errorMessages';

const AppFormPicker = ({ items, name, placeholder, width, PickerItemComponent, numberOfColumns }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
