import { View, Text } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import FormContainer from './FormContainer';
const LoginForm = () => {
  return (
    <FormContainer>
      <Text className="font-bold text-5xl">Login</Text>
    </FormContainer>
  );
};

export default LoginForm;
