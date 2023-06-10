import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import React, { useRef } from 'react';
import FormHeader from '../components/FormHeader';
import FormSelectorBtn from '../components/FormSelectorBtn';
import { ScrollView } from 'react-native-gesture-handler';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const { width } = Dimensions.get('window');
const Signup = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });
  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rightHeaderTransleteY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const logincolorIntorplate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)'],
  });
  const signupcolorIntorplate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)'],
  });
  return (
    <View className="flex-1 pt" style={{ paddingTop: 120 }}>
      <View className="h-20">
        <FormHeader
          leftHeading="welcome "
          rightHeading="test"
          subHeading="vffff"
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTransleteY={rightHeaderTransleteY}
        />
      </View>
      <View className="flex-row px-6 mb-5">
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor={logincolorIntorplate}
          title="logs"
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor={signupcolorIntorplate}
          title="signup"
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        <LoginForm />
        <ScrollView>
          <SignupForm />
        </ScrollView>
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
