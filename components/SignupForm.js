import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { Dimensions, Animated } from 'react-native';
import FormContainer from './FormContainer';
const SignupForm = () => {
  return (
    <FormContainer>
      <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>Nom:</Text>
      <TextInput
        placeholder="Entrez votre nom"
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
        Mot de Passe:
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
      <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>
        Confirmez votre mot de passe:
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
        <Text style={{ fontSize: 18, color: 'black' }}>Valider</Text>
      </TouchableOpacity>
    </FormContainer>
  );
};

export default SignupForm;
