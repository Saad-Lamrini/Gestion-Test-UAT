import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import FormContainer from './FormContainer';
const LoginForm = () => {
  return (
    <FormContainer>
      <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>Email:</Text>
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
      <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>
        Mot de passe:
      </Text>
      <TextInput
        placeholder="******"
        secureTextEntry
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
          backgroundColor: 'rgba(255, 220, 0, 1)',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 18, color: 'black' }}>Se connecter</Text>
      </TouchableOpacity>
    </FormContainer>
  );
};

export default LoginForm;
