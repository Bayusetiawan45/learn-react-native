import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessages from './errorMessages';
import AppTextInput from '../input';

const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
