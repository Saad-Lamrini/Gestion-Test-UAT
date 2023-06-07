import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const FormSelectorBtn = ({ backgroundColor, title, style }) => {
  return (
    <TouchableWithoutFeedback>
      <View
        className="h-16 w-1/2 justify-center items-center"
        style={[style, { backgroundColor }]}
      >
        <Text className="text-white text-base">{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormSelectorBtn;
