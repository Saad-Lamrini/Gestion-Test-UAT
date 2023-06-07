import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import React from 'react';
import FormHeader from '../components/FormHeader';
import FormSelectorBtn from '../components/FormSelectorBtn';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
const Signup = () => {
  return (
    <View className="flex-1 pt" style={{ paddingTop: 90 }}>
      <View className="h-20">
        <FormHeader
          leftHeading="welcome "
          rightHeading="test"
          subHeading="vffff"
        />
      </View>
      <View className="flex-row px-6">
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor="rgba(27,27,51,1)"
          title="logs"
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor="rgba(27,27,51,0.4)"
          title="signup"
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <LoginForm />
        <SignupForm />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
export default Signup;
