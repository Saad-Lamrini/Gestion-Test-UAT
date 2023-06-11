import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import React from 'react';

const FormSelectorBtn = ({ backgroundColor, title, style, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        className="h-12 w-1/2 justify-center items-center"
        style={[style, { backgroundColor }]}
      >
        <Text className="text-black text-base">{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default FormSelectorBtn;
