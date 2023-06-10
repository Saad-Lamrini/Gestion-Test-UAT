import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import React from 'react';

const FormSelectorBtn = ({ backgroundColor, title, style }) => {
  return (
    <TouchableWithoutFeedback>
      <Animated.View
        className="h-16 w-1/2 justify-center items-center"
        style={[style, { backgroundColor }]}
      >
        <Text className="text-white text-base">{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default FormSelectorBtn;
