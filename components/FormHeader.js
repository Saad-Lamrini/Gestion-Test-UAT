import { View, Text, Animated } from 'react-native';
import React from 'react';

const FormHeader = ({
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranslateX = 40,
  rightHeaderTransleteY = -20,
  rightHeaderOpacity = 0,
}) => {
  return (
    <View>
      <View className="flex-row justify-center items-center">
        <Animated.Text
          className="font-bold text-4xl text-red-600"
          style={{ transform: [{ translateX: leftHeaderTranslateX }] }}
        >
          {leftHeading}
        </Animated.Text>
        <Animated.Text
          className="font-bold text-4xl text-red-600"
          style={{
            opacity: rightHeaderOpacity,
            transform: [{ translateY: rightHeaderTransleteY }],
          }}
        >
          {rightHeading}
        </Animated.Text>
      </View>
      <Text className="text-lg text-red-600 text-center">{subHeading}</Text>
    </View>
  );
};

export default FormHeader;
