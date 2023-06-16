import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { Dimensions, Animated } from 'react-native';
import FormContainer from './FormContainer';
const SignupForm = () => {
  const [name, SetName] = useState();
  const [emai, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [pw2, SetPw2] = useState();
  const creercompte = () => {
    console.log(password);
    if (password != pw2) {
      console.log('zeebi');
    }
  };
  return (
    <FormContainer>
      <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>Nom</Text>
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
        onChangeText={(text) => SetName(text)}
      />
      <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>Email</Text>
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
      <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>Mot de Passe</Text>
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
        onChangeText={(text) => SetPassword(text)}
      />
      <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>
        Confirmez votre mot de passe
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
        onChangeText={(text) => SetPw2(text)}
      />
      <TouchableOpacity
        style={{
          height: 45,
          backgroundColor: '#12CAD6',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={creercompte}
      >
        <Text style={{ fontSize: 18, color: 'black' }}>Valider</Text>
      </TouchableOpacity>
    </FormContainer>
  );
};

export default SignupForm;
