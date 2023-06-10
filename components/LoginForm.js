import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import FormContainer from './FormContainer';
const LoginForm = () => {
  return (
    <FormContainer>
      <Text style={{ fontWeight: 'bold' }}>Email</Text>
      <TextInput
        placeholder="example@email.com"
        style={{
          borderWidth: 1,
          borderColor: '#1b1b33',
          height: 35,
          borderRadius: 8,
          fontSize: 16,
          paddingLeft: 10,
          marginBottom: 20,
        }}
      />
      <Text style={{ fontWeight: 'bold' }}>Password</Text>
      <TextInput
        placeholder="******"
        style={{
          borderWidth: 1,
          borderColor: '#1b1b33',
          height: 35,
          borderRadius: 8,
          fontSize: 16,
          paddingLeft: 10,
          marginBottom: 20,
        }}
      />
      <TouchableOpacity
        style={{
          height: 45,
          backgroundColor: 'rgba(27,27,51,0.4)',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 18, color: '#fff' }}>Login</Text>
      </TouchableOpacity>
    </FormContainer>
  );
};

export default LoginForm;
