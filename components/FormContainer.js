import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <View
      className="justify-center items-center"
      style={{ width: Dimensions.get('window').width }}
    >
      {children}
    </View>
  );
};

export default FormContainer;
