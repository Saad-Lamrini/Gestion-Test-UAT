import { View, Text } from 'react-native';
import React from 'react';

const FormHeader = ({ leftHeading, rightHeading, subHeading }) => {
  return (
    <View>
      <View className="flex-row justify-center items-center">
        <Text className="font-bold text-4xl text-red-600">{leftHeading}</Text>
        <Text className="font-bold text-4xl text-red-600">{rightHeading}</Text>
      </View>
      <Text className="text-lg text-red-600 text-center">{subHeading}</Text>
    </View>
  );
};

export default FormHeader;
