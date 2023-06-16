import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import FormContainer from './FormContainer';
const LoginForm = () => {
  const [email, SetEmail] = useState();
  const [password, Setpassword] = useState();

  const onclicking = () => {
    console.log(password);
  };
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
        onChangeText={(text) => SetEmail(text)}
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
        onChangeText={(text) => Setpassword(text)}
      />
      <TouchableOpacity
        style={{
          height: 45,
          backgroundColor: '#12CAD6',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onclicking}
      >
        <Text style={{ fontSize: 18, color: 'black' }}>Connexion</Text>
      </TouchableOpacity>
    </FormContainer>
  );
};

export default LoginForm;
