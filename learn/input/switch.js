import React, { useState } from 'react';
import { Switch } from 'react-native';

const LearnSwitch = () => {
  const [isNew, setIsNew] = useState(false);
  return (
    <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
  );
};

export default LearnSwitch;
