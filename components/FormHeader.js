import { View, Text, Animated, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const FormHeader = ({
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranslateX = 40,
  rightHeaderTransleteY = -20,
  rightHeaderOpacity = 0,
}) => {
  const handleLinkPress = () => {
    // Ouvrir le lien dans le navigateur par défaut du dispositif
    Linking.openURL('https://www.alten.com/');
  };
  return (
    <View>
      <View className="flex-row justify-center items-center">
        <Animated.Text
          className="font-bold text-5xl"
          style={{
            transform: [{ translateX: leftHeaderTranslateX }],
            color: 'rgba(0, 180, 216, 1)',
          }}
        >
          {leftHeading}
        </Animated.Text>
        <Animated.Text
          className="font-bold text-5xl text-red-600"
          style={{
            opacity: rightHeaderOpacity,
            transform: [{ translateY: rightHeaderTransleteY }],
            color: 'rgba(0, 180, 216, 1)',
          }}
        >
          {rightHeading}
        </Animated.Text>
      </View>
      <TouchableOpacity
        onPress={handleLinkPress}
        className="items-center justify-center"
      >
        <Text
          style={{
            color: 'black',
            textDecorationLine: 'underline',
            fontSize: 14,
            paddingTop: 5,
            fontWeight: 'bold',
          }}
        >
          {subHeading}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormHeader;
