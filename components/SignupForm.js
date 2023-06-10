import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { Dimensions, Animated } from 'react-native';
import FormContainer from './FormContainer';
const SignupForm = () => {
  const animation = useRef(new Animated.Value(0)).current;
  return (
    <FormContainer>
      <Text style={{ fontWeight: 'bold' }}>Name</Text>
      <TextInput
        placeholder="Enter your name"
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
      <Text style={{ fontWeight: 'bold' }}>Confirm your Password</Text>
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
        <Text style={{ fontSize: 18, color: '#fff' }}>Signup</Text>
      </TouchableOpacity>
    </FormContainer>
  );
};

export default SignupForm;
